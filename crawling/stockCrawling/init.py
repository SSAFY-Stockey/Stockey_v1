import pandas as pd

stockCodeDf = pd.read_excel("코스피 종목 정보.xlsx")

stockCodeDic = {}
stockCntDic = {}

for idx, row in stockCodeDf.iterrows():
    stockCodeDic[row['한글 종목약명']] = row['단축코드']
    stockCntDic[row['한글 종목약명']] = row['상장주식수']

df = pd.read_csv("real종목산업v2.csv")[['종목명', '대분류명', '소분류명']]

# STEP 1
import pymysql

# STEP 2: MySQL Connection 연결
con = pymysql.connect(host='j8a508.p.ssafy.io', user='develop', password='develop', db='stockey', charset='utf8')

for i in range(len(df)):
    name = df.loc[i]['종목명']
    big_category = df.loc[i]['대분류명']
    small_category = df.loc[i]['소분류명']

    # STEP 3: Connection 으로부터 Cursor 생성
    cur = con.cursor()

    # 해당 산업명이 존재하는지 체크
    cur.execute("SELECT * FROM industry WHERE name = %s", small_category)
    cnt = cur.rowcount

    # 존재한다면 continue
    if cnt <= 0:
        sql = "INSERT INTO industry(category,name) VALUES (%s, %s)"
        cur.execute(sql, (big_category, small_category))
        con.commit()

    cur.execute("SELECT * FROM industry WHERE name = %s", small_category)
    industry_id = cur.fetchall()[0][0]
    print(industry_id)

    sql = "INSERT INTO stock(name, industry_id, code,stock_count) VALUES(%s, %s, %s,%s)"
    cur.execute(sql, (name, industry_id, stockCodeDic[name], stockCntDic[name]))
    con.commit()
    # 데이타 Fetch
    # rows = cur.fetchall()
    # print(rows)
    
    

con.commit()
con.close()

