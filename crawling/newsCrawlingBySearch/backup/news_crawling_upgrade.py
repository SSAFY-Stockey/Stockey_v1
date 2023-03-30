# 1. 라이브러리 불러오기

#크롤링시 필요한 라이브러리 불러오기
from bs4 import BeautifulSoup
import requests
import re
import datetime
from tqdm import tqdm
import sys
from datetime import datetime
import pandas as pd


# 1.1 사용할 변수들

# ConnectionError방지
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/98.0.4758.102"}

# 검색어 입력
keyword = "삼성전자"


# 2. 크롤링 시 필요한 함수 만들기

#입력된 수를 1, 11, 21, 31 ...만들어 주는 함수
def makePgNum(num):
    if num == 1:
        return num
    elif num == 0:
        return num+1
    else:
        return num+9*(num-1)

def makeUrlTest(search, start_pg, end_pg):
    if start_pg == end_pg:
        start_page = makePgNum(start_pg)
        url = "https://search.naver.com/search.naver?where=news&sm=tab_pge&query=" + search + "&start=" + str(start_page)
        print("생성url: ", url)
        return url
    else:
        urls = []
        for i in range(start_pg, end_pg + 1):
            page = makePgNum(i)
            url = "https://search.naver.com/search.naver?where=news&sm=tab_pge&query=" + search + "&start=" + str(page)
            urls.append(url)
        print("생성url: ", urls)
        return urls

# 크롤링할 url 생성하는 함수 만들기 -> 키워드와 날짜 넣어주기
def makeUrl(keyword, target_date, ds_de, start_pg, end_pg, sort=0):
    url = f"https://search.naver.com/search.naver?where=news&query={keyword}&sm=tab_opt&sort={sort}" \
          f"&photo=0&field=0&pd=3&ds={ds_de}&de={ds_de}&docid=&related=0&mynews=0&office_type=0" \
          f"&office_section_code=0&news_office_checked=&nso=so%3Ar%2Cp%3Afrom{target_date}to{target_date}" \
          f"&is_sug_officeid=0"
    print("생성url: ", url)
    return url


# html에서 원하는 속성 추출하는 함수 만들기 (기사, 추출하려는 속성값)
def news_attrs_crawler(articles, attrs):
    attrs_content=[]
    for i in articles:
        attrs_content.append(i.attrs[attrs]) #

    print("dddddddddddddddddddd")
    print(attrs_content)
    return attrs_content


# html생성해서 기사크롤링하는 함수 만들기(url): 링크를 반환
def articles_crawler(i):
    # html 불러오기
    original_html = requests.get(i, headers=headers)
    html = BeautifulSoup(original_html.text, "html.parser")

    url_naver = html.select(
        "div.group_news > ul.list_news > li div.news_area > div.news_info > div.info_group > a.info")  # html
    url = news_attrs_crawler(url_naver, 'href')
    return url


# 3. 크롤링할 네이버 뉴스 URL 추출하기

# 제목, 링크, 내용 1차원 리스트로 꺼내는 함수 생성
def makeList(newlist, content):
    for i in content:
        for j in i:
            newlist.append(j)
    return newlist


def run_crawl_by_date(year, month, start_day, end_day):
    for day in tqdm(range(start_day, end_day+1)):
        # 특정 day범위에 대해 page 단위로 가져와
        # for in

        # 뉴스 크롤러 실행
        news_url = []  # 네이버 뉴스 url과 다른 뉴스 url이 혼재되어 있음

        ####### 결과 데이터 담는 리스트 #######
        news_titles = []
        news_contents = []
        news_dates = []
        ###################################

        ################ 날짜 범위 정하기 ################
        date_time_obj = datetime(year=year, month=month, day=day)
        target_date = date_time_obj.strftime("%Y%m%d")
        ds_de = date_time_obj.strftime("%Y.%m.%d")
        ###############################################

        url = makeUrl(keyword, target_date, ds_de)
        for i in url:
            url = articles_crawler(i)
            news_url.append(url)  # 네이버 뉴스 url과 다른 뉴스 url 구별없이 적재

        # 1차원 리스트로 만들기(내용 제외) -> [[pg1/3], [pg2/3], [pg3/3]] 형태를 풀어서 [  ] 1차원 리스트로 풀어주겠다
        news_url_1 = []
        makeList(news_url_1, news_url)

        # NAVER 뉴스만 남기기
        final_urls = []
        for i in tqdm(range(len(news_url_1))):
            if "news.naver.com" in news_url_1[i]:
                final_urls.append(news_url_1[i])
            else:
                pass

        # 4.뉴스 본문 및 날짜 크롤링하기
        # 뉴스 내용 크롤링

        for i in tqdm(final_urls):
            # 각 기사 html get하기
            news = requests.get(i, headers=headers)
            news_html = BeautifulSoup(news.text, "html.parser")
            # 뉴스 제목 가져오기
            title = news_html.select_one("#ct > div.media_end_head.go_trans > div.media_end_head_title > h2")
            if title == None:
                title = news_html.select_one("#content > div.end_ct > div > h2")

            # 뉴스 본문 가져오기
            content = news_html.select("div#dic_area")
            if content == []:
                content = news_html.select("#articeBody")

            # 기사 텍스트만 가져오기
            # list합치기
            content = ''.join(str(content))

            # html태그제거 및 텍스트 다듬기
            pattern1 = '<[^>]*>'
            title = re.sub(pattern=pattern1, repl='', string=str(title))
            content = re.sub(pattern=pattern1, repl='', string=content)
            pattern2 = """[\n\n\n\n\n// flash 오류를 우회하기 위한 함수 추가\nfunction _flash_removeCallback() {}"""
            content = content.replace(pattern2, '')

            news_titles.append(title)
            news_contents.append(content)

            try:
                html_date = news_html.select_one(
                    "div#ct> div.media_end_head.go_trans > div.media_end_head_info.nv_notrans > div.media_end_head_info_datestamp > div > span")
                news_date = html_date.attrs['data-date-time']
            except AttributeError:
                news_date = news_html.select_one("#content > div.end_ct > div > div.article_info > span > em")
                news_date = re.sub(pattern=pattern1, repl='', string=str(news_date))
            # 날짜 가져오기
            news_dates.append(news_date)

        # print("\n[뉴스 제목]")
        # print(news_titles)
        # print("\n[뉴스 링크]")
        # print(final_urls)
        # print("\n[뉴스 내용]")
        # print(news_contents)

        print('news_title: ', len(news_titles))
        print('news_url: ', len(final_urls))
        print('news_contents: ', len(news_contents))
        print('news_dates: ', len(news_dates))

        # 데이터 프레임 만들기
        news_df = pd.DataFrame({'date': news_dates, 'title': news_titles, 'link': final_urls, 'content': news_contents})
        # news_df
        print(news_df)

        # 중복 행 지우기
        news_df = news_df.drop_duplicates(keep='first', ignore_index=True)
        print("중복 제거 후 행 개수: ", len(news_df))

        # 데이터 프레임 저장
        # now = datetime.datetime.now()
        now = datetime.now()
        news_df.to_csv('{}_{}.csv'.format(keyword, now.strftime('%Y%m%d_%H시%M분%S초')), encoding='utf-8-sig', index=False)


run_crawl_by_date(year=2022, month=1, start_day=1, end_day=1)