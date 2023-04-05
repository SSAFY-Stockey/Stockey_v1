# -*- coding: utf-8 -*-
import pandas as pd
from keybert import KeyBERT
from transformers import BertModel
from kiwipiepy import Kiwi
from pprint import pprint
import time
import os
import pymysql

ECONOMY = 'economy'
INDUSTRY = 'industry'
STOCK = 'stock'

fileList = []

# news_type = ECONOMY
# news_type = INDUSTRY
news_type = STOCK

# Specify the CSV file name
file_path = "./inputs/real종목산업v3.csv"

# Specify the column names you want to extract
# column_names = ['검색어']  # Replace with your desired column names
column_names = ['종목명']

# Read the CSV file
df = pd.read_csv(file_path, encoding='cp949')

# Extract specific columns and concatenate them into a single Series
extracted_values = pd.concat([df[col] for col in column_names])

# Convert the Series to a list
extracted_values_list = extracted_values.tolist()

# Separate elements containing a ',' to make a new list
final_values = []
for value in extracted_values_list:
    if ',' in value:
        split_values = value.split(',')
        final_values.extend(split_values)
    else:
        final_values.append(value)

# Print the final list
final_values = list(set(final_values))
print(final_values)
print(f'종목 갯수 : {len(final_values)}개')
fileList = final_values

pd.options.display.max_rows = 10
pd.options.display.max_columns = 10

pd.options.display.max_rows = None
pd.options.display.max_columns = None

# Connect to the database
conn = pymysql.connect(host='j8a508.p.ssafy.io', user='develop', password='develop', db='stockey', charset='utf8')
cursor = conn.cursor()

# 명사 추출 함수
kiwi = Kiwi()


def noun_extractor(text):
    results = []
    result = kiwi.analyze(text)
    for token, pos, _, _ in result[0][0]:
        if len(token) != 1 and pos.startswith('N') or pos.startswith('SL'):
            results.append(token)
    return results


# 모델 설정
kw_model = KeyBERT("paraphrase-multilingual-MiniLM-L12-v2")

# 불용어 설정
# stop_words=['kbs', '뉴스', '기자', '속보', '뉴스1', 'mbc', 'sbs', '뉴스데스크', '일보', '올해', '오늘', '내일', '어제', '내년', '하루', '이틀', '사흘', '모레', '작년', '당시', '개월']
stop_words = ['코스피', '기업', '한국', '정부', '사업', '경제', '증시', '서울', '코스닥', '가격', '기술', '증권', '개발', '회장', '아파트', '공장', '판매',
              '안전', '장관', '업계', '최대', '뉴욕', '전년', '고객', '분기', '마켓', '도시', '영업', '코리아', '그룹', '회의', '점검', '상반기', '대표',
              '세대', '주간', '세계', '센터', '선정', 'etf', '속도', '증권사', '주가', '추석', '기관', '직원', '외인', '스텝', '평균', '주년', '목표',
              '거래일', '이유', '캠페인', '시작', '자산', '국제', '마감', '문화', '시간', '천억', '신청', '추가', '출발', '주요', '종목', '절반', '특징',
              'vs', '계획', '발언', '지난해', '비용', '인증', '연말', '예산', '회사', '모집', '인터뷰', '오전', '신문', '우리', '시대', '행진', '예측',
              '기록', '충전', '전국', '나스닥', '혜택', '모델', '정보', '결제', '장비', '지급', '취업', '개인', '가치', '진단', '이전', '솔루션', '소통',
              '오후', '상품', '세상', '사진', '초반', '시설', '예약', '스토어', '기차', '이달', '어디', '누구', '위원회', '다음', '제한', '3사', '관리',
              '첫날', '일정', '계열사', '협력사', '내달', '김주현', '선택', '예상', '대응', '지주', '이후', '등록', '홀딩스', '주말', '헤드라인', '후퇴',
              'spc', '창원', '체계', '보고서', '역사', '인천공항', '패키지', '박스', '정상', '강남', 'bnk', '표준', '진행', '은행장', '경험', '필요',
              '타이어', '마이', '컴퍼니', '초청', '충남', '화성', '하늘', '레드', '김대호', '날개', '주민', '도로', '스튜디오', '컨퍼런스', '서울대', '파크',
              '믹스', 'ftx', '대화', '분석', '블루', '바다', '목소리', '실시', '새벽', '연속', '본격', '시험', '지난달', '리포트', '사전', '후보자', '시티',
              '활용', '이상', '농식품부', '카톡', '월급', '메뉴', '재송', '정원', '순위', '참석', '생명', 'dd', '조직', '국민', '접종', '사용', '재계',
              '타운', '지분', '공원', 'kg', '중심', '인사말', '사설', '체크', '케어', '라이브', '플러스', 'fn', '직장인', '비율', '리더십', '바람',
              '컨설팅', '변경', '본부', '닷컴', '출연', '클래스', '근무', '업무', '전면', '전통', '연내', '최종', '용품', '리더', '의무', '비즈니스', '균형',
              '개시', '자동', '향후', '데이', '대비', '집단', '이제', '대신', '수준', '단지', '계속', '구역', '사실', '저장', '테스트', '김동관', '이번',
              '처음', '예고', '확인', '기간', '이하', '여부', '선언', '흐름', '나흘', '이것', '이어', '나라', '아래', '여기', '제외', '지금', '월요일',
              '기기', '칼럼', '대체', '언제', '이동', 'kbs', '뉴스', '기자', '속보', '뉴스1', 'mbc', 'sbs', '뉴스데스크', '일보', '올해', '오늘',
              '내일', '어제', '내년', '하루', '이틀', '사흘', '모레', '작년', '당시', '개월']


# 키워드 추출 함수
def keyword_extractor(content):
    content_nouns = ' '.join(noun_extractor(content))
    keywords = kw_model.extract_keywords(content_nouns, keyphrase_ngram_range=(1, 1), top_n=3, use_mmr=True,
                                         stop_words=stop_words)
    return keywords


import re


def text_cleaner(text):
    pattern_punctuation = re.compile(r'[^\w\s]')
    return pattern_punctuation.sub('', text).replace('\n', ' ')


def keywd_select(curKeywd):
    keyword_table_check_sql = f"select keyword_id from keyword_v2 where name = %s"
    cursor.execute(keyword_table_check_sql, (curKeywd,))
    return cursor.fetchone()


def keywd_insert(curKeywd):
    keyword_insert_sql = 'insert into keyword_v2 (description, name) values (%s, %s)'
    keyword_insert_data = (None, curKeywd)
    cursor.execute(keyword_insert_sql, keyword_insert_data)
    conn.commit()


def news_relation_insert(newsId, keywordId, industryId, stockId, newsType):
    news_relation_insert_sql \
        = 'insert into news_relation_v2 (industry_id, keyword_id, news_id, stock_id, news_type) values (%s, %s, %s, %s, %s)'
    news_relation_insert_data = (industryId, keywordId, newsId, stockId, newsType)
    cursor.execute(news_relation_insert_sql, news_relation_insert_data)
    conn.commit()


def find_by_stock_id_by_company_name(companyName):
    find_by_industry_id_by_name_sql = "SELECT stock_id FROM stock WHERE name LIKE CONCAT('%', %s, '%');"
    cursor.execute(find_by_industry_id_by_name_sql, (companyName,))
    return cursor.fetchone()


# =============================================================================================#
# article 읽어오기

# keyword_insert_sql = 'insert into keyword_v2 (description, name) values (%s, %s)'
# news_relation_insert_sql = 'insert into news_relation_v2 (industry_id, keyword_id, news_id, stock_id, news_type) values (%s, %s, %s, %s, %s)'

for file in fileList:
    start = time.time()

    # Query the data from the table
    sql = f"SELECT * FROM news where category = '{file}'"
    article_df = pd.read_sql(sql, conn)

    # Print the dataframe
    # print(article_df.head())
    # print(article_df.shape)

    # # insert 할 데이터를 튜플 형태로 append
    # keyword_table_data = []
    # news_relation_table_data = []

    # 모든 기사마다
    for row in article_df.itertuples():
        # Pandas(Index=0, news_id=1, category='economy', hdfs_id='0_2022-01-01 00:00:00_economy',
        # news_url='https://n.news.naver.com/mnews/article/003/0010920824?sid=101', press=None,
        # pressed_at=datetime.date(2022, 1, 1), title='신년사방문규 수은 행장 글로벌 공급망 안정화에 총력')

        # print(row)

        # print(row.hdfs_id)

        text = row.title
        text = text_cleaner(text)  # 공백 및 특수문자 제거
        noun_text = noun_extractor(text)  # 명사만 추출
        keywords = keyword_extractor(text)  # 키워드 추출

        if len(keywords) < 3:
            continue

        rst = [row.hdfs_id, keywords[0][0], keywords[0][1], keywords[1][0], keywords[1][1], keywords[2][0],
               keywords[2][1]]
        # print(">>>>", rst)

        # 뽑은 3개의 키워드
        for i in range(3):
            # 먼저 select 해본다.
            cur_keywd = keywords[i][0]
            res_row = keywd_select(cur_keywd)

            # 현재 키워드 id 저장 변수
            cur_keywd_id = -1

            # 만약 등록된 키워드가 없다면
            if res_row is None:
                # 키워드 insert 후 다시 select 하여 keywd id값을 가져온다.
                keywd_insert(cur_keywd)
                cur_keywd_id = keywd_select(cur_keywd)[0]
            # 만약 등록된 키워드가 있다면
            else:
                # res_row에서 keywd id값을 가져온다.
                cur_keywd_id = res_row[0]

            # news relation 채우기

            if news_type == ECONOMY:
                exit(1)
                # 뉴스 id
                news_id = row.news_id
                news_relation_insert(news_id, cur_keywd_id, None, None, ECONOMY)
            elif news_type == INDUSTRY:
                pass
            elif news_type == STOCK:
                # 주식 id
                stock_id = find_by_stock_id_by_company_name(file)
                news_relation_insert(news_id, cur_keywd_id, None, stock_id, STOCK)

    print(file, 'done')
    print(f"{time.time() - start:.4f} sec")

# Close the database connection
cursor.close()
conn.close()
exit(0)
