from selenium import webdriver
import datetime
import time
from selenium.webdriver.common.by import By
import pandas as pd
import math
#STEP 1
import pymysql

browser = webdriver.Chrome()

original_window = browser.current_window_handle


def company_crawling(url):
    ## 회사 설명 상단 크롤링 
    browser.get(url)
    corp_detail = browser.find_element(By.CLASS_NAME,'corp_detail_box')
    tags = corp_detail.find_element(By.CLASS_NAME,'tag')
    result = {}

    print('='*20,"상단 크롤링",'='*20)
    line = tags.text
    split_tag = line.split('#')
    economy_tag = ''
    for tag in split_tag:
        if tag.startswith("재무평가"):
            economy_rate = tag.split("_")[1]
            economy_tag = economy_rate
    
    result['basic_info'] = economy_tag
    
    

    # 테이블 크롤링
    print('='*20,"테이블 크롤링",'='*20)
    dict = {}
    table = corp_detail.find_element(By.CLASS_NAME,'tbl_com1')
    tbody = table.find_element(By.TAG_NAME,"tbody")
    rows = tbody.find_elements(By.TAG_NAME,"tr")
    for row in rows:
        keys=row.find_elements(By.TAG_NAME,"th")
        values=row.find_elements(By.TAG_NAME,"td")
        for i in range(len(keys)):
            dict[keys[i].text] = values[i].text


    result['company_size'] = dict['기업규모']
    try:
        sales = dict['매출액'].split('\n')[0].split(':')[1].replace(" ","")
    except:
        sales = dict['매출액']
    result['sales'] = sales
    result['credit_rank'] = dict['신용등급']


    ## 대표 브랜드 및 사업 구성
    print('='*20,"대표 브랜드 및 사업 구성",'='*20)
    try:
        corp_brand = browser.find_element(By.CLASS_NAME,'list_brand2')
        businesses = corp_brand.find_elements(By.TAG_NAME,"li")
        business_list  = []
        for business in businesses:
            business_dict = {}
            name = business.find_element(By.CLASS_NAME,'t1').text
            description = business.find_element(By.CLASS_NAME,'t2').text
            description = description.replace("'","")
            business_dict['name'] = name
            business_dict['description'] = description
            business_list.append(business_dict)

        result['businesses'] = business_list
    except:
        result['businesses'] =[]




    return result


def get_stock_id(name):
    cur = con.cursor()
    cur.execute("SELECT * FROM stock where name = %s",name)
    result = cur.fetchone()
    return result
    

def get_stock_names():
    df = pd.read_csv("기업요약.csv")[['종목명','캐치 url',]]
    return df

def create_stock_db(df,name):
    cur = con.cursor()
    sql = f"UPDATE stock SET company_size = '{df['company_size']}' \
        , company_sales = '{df['sales']}' , credit_rank = '{df['credit_rank']}' \
        , basic_info = '{df['basic_info']}'  where name = '{name}'"
    cur.execute(sql)
    con.commit()

    cur.execute(f"SELECT(stock_id) from stock where name='{name}'")
    stock_id = int(cur.fetchone()[0])
    return stock_id


def create_business_db(df,id):
    cur = con.cursor()
    businnesses = df['businesses']
    for business in businnesses:
        print("사업",business, id)
        cur.execute(f"INSERT INTO business(name,description,stock_id) \
                values ('{business['name']}', '{business['description']}','{id}') ")
        con.commit()
    con.commit()

def check_business_exists(id):
    cur = con.cursor()
    cur.execute(f"SELECT * from business where stock_id = '{id}'")
    answer = cur.fetchall()
    if(answer):
        return True
    else:
        return False

def login():
    url = "https://www.catch.co.kr/Member/Login?ReturnURL=%2F"
    browser.get(url)
    time.sleep(1)
    browser.find_element(By.CLASS_NAME,"ico1").click()
    time.sleep(5)
    for window_handle in browser.window_handles:
        if window_handle != original_window:
            browser.switch_to.window(window_handle)
            break
    id = browser.find_element(By.ID,"id")
    pw =browser.find_element(By.ID,"pw")

    # TOOD 
    id.send_keys("네이버 id")
    time.sleep(1)
    # TODO
    pw.send_keys("네이버 비밀번호")
    time.sleep(1)
    browser.find_element(By.ID,"log.login").click()
    time.sleep(15)

def start():
    login()
    browser.switch_to.window(original_window)
    df = get_stock_names()
    for i in range(len(df['종목명'])):
        name = df['종목명'].loc[i]
        url = df['캐치 url'].loc[i]
        stock = get_stock_id(name)
        print(i,"크롤링 중... : ",name,url)
        try:
            math.isnan(url)
            url = ""
        except:
            pass
        if(stock and url):
            time.sleep(5)
            data = company_crawling(url)
            id = create_stock_db(data,name)
            isAlready = check_business_exists(id)
            if(not isAlready):
                create_business_db(data,id)


# con = pymysql.connect(host='호스트명', user='이름', password='패스워드',
#                     db='db명', charset='utf8') # 한글처리 (charset = 'utf8')

start()