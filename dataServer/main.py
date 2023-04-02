from fastapi import FastAPI
from pydantic import BaseSettings
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger
from datetime import datetime
from stock import daily_stock
import pymysql
from pprint import pprint
import os
import time
from tqdm import tqdm
import numpy as np
import pandas as pd
from konlpy.tag import Okt
from keybert import KeyBERT
from transformers import BertModel
from kiwipiepy import Kiwi



class DBSettings(BaseSettings):
    host: str
    port: str
    db: str
    user: str
    password : str

    class Config:
        env_file = '.env'


settings = DBSettings()
app = FastAPI()
scheduler = BackgroundScheduler()
scheduler.start()

@app.on_event('startup')
def start_scheduler():
    print("현재시각" ,datetime.today().date())
    host = settings.host
    db = settings.db
    user = settings.user
    password = settings.password
    port = settings.port

    stockCrawler = daily_stock.Stock(host,port,db,user,password)
    @scheduler.scheduled_job(trigger=CronTrigger(hour =9))
    def stock_daily_create():
        print("주식 데이터 생성")
        stockCrawler.daily_stock_insert()

        

    @scheduler.scheduled_job(trigger=CronTrigger(hour ='10-18'))
    def stock_daily_update():
        print("주식 데이터 업데이트")
        stockCrawler.daily_stock_update()

@app.get("/data/test/{name}")
def sub_test(name : str, start_date,end_date):
    start = time.time()
    print("시작")
    con = pymysql.connect(host='호스트명', user='유저', password='비밀번호', db='db명', charset='utf8')
    cur = con.cursor()
    sql = f"select title,news_url,pressed_at from news n  \
        join news_relation nr \
        on  n.news_id = nr.news_id \
        join stock s \
        on s.stock_id = nr.stock_id \
    where s.name = '{name}' and pressed_at between '{start_date}' and '{end_date}'"

    
    cur.execute(sql)
    keywords_rst = set(cur.fetchall())
    df = pd.DataFrame(keywords_rst)

    contents = df[0] 

    okt = Okt() # 형태소 분석기 객체 생성
    noun_list = []
    for content in tqdm(contents):
        nouns = okt.nouns(content) # 명사만 추출하기, 결과값은 명사 리스트
        noun_list.append(nouns)

    # print("명사 추출 완료")
    df['nouns'] = noun_list
    text = [" ".join(noun) for noun in df['nouns']]

    #1 tf-idf 임베딩(+Normalize)
    from sklearn.feature_extraction.text import TfidfVectorizer
    tfidf_vectorizer = TfidfVectorizer(min_df = 5, ngram_range=(1,5))
    tfidf_vectorizer.fit(text)
    vector = tfidf_vectorizer.transform(text).toarray()
    vector = np.array(vector)

    # print("tf-idf 완료" )
    # 2 DBSCAN Clustering
    from sklearn.cluster import DBSCAN

    # eps이 낮을수록, min_samples 값이 높을수록 군집으로 판단하는 기준이 까다로움.
    vector = np.array(vector) # Normalizer를 이용해 변환된 벡터
    model = DBSCAN(eps=0.5,min_samples= 5, metric = "cosine")
    # 거리 계산 식으로는 Cosine distance를 이용
    result = model.fit_predict(vector)
    df['result'] = result

    print("DBSCAN 완료" )
    print('Row count is:',df.shape[0])
    print('군집개수 :', result.max())
    # train_extract

    clustered_list = []
    for cluster_num in set(result):
        # -1,0은 노이즈 판별이 났거나 클러스터링이 안된 경우
        if(cluster_num == -1 or cluster_num == 0):
            continue
        else:
            print("cluster num : {}".format(cluster_num))
            temp_df = df[df['result'] == cluster_num] # cluster num 별로 조회
            clustered_list.append((temp_df[0],temp_df[1],temp_df[2]))
    print(len(clustered_list))
    clustered_list.sort(key = len,reverse=True)

    keyphrase_target_list = clustered_list[:4]
    # print(keyphrase_target_list)
    # print(len(keyphrase_target_list))

    result = []
    for key_phrase_target in keyphrase_target_list:
        dict = {} 
        phrase = get_phraze(key_phrase_target[0])
        print(phrase)
        dict['key_phrase'] = phrase
        news_list = []
        for title,url,date in zip(temp_df[0],temp_df[1],temp_df[2]):
            news_dict = {}
            news_dict['title'] = title
            news_dict['url'] = url
            news_dict['date'] = date
            news_list.append(news_dict)
        dict['news'] = news_list
        result.append(dict)
    end = time.time()
    print('걸린시간 : ',end-start)
    return  result


def get_phraze(title_list):

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
    stop_words=['kbs', '뉴스', '기자', '속보', '뉴스1', 'mbc', 'sbs', '뉴스데스크', '일보', '올해', '오늘', '내일', '어제', '내년', '하루', '이틀', '사흘', '모레', '작년', '당시', '개월']

    # 키워드 추출 함수
    def keyword_extractor(content):
        content_nouns = ' '.join(noun_extractor(content))
        keywords = kw_model.extract_keywords(content_nouns, keyphrase_ngram_range=(1, 2), top_n=3, use_mmr=True, stop_words=stop_words)
        return keywords

    import re
    def text_cleaner(text):
        pattern = r"\[.*?\]"
        new_str = re.sub(pattern, "", text)
        
        pattern_punctuation = re.compile(r'[^\w\s]')
        return pattern_punctuation.sub('', new_str).replace('\n', ' ')


    #=============================================================================================#
    # article 읽어오기
    start = time.time()
    save = []

    # 모든 기사마다


    content_nouns = ' '.join(title_list)

    text = text_cleaner(content_nouns)               # 공백 및 특수문자 제거
    keywords = keyword_extractor(text) # 키워드 추출
    print(keywords)
    if len(keywords) >= 3: 
        rst = [keywords[0][0], keywords[0][1], keywords[1][0], keywords[1][1],keywords[2][0], keywords[2][1]]
        save.append(rst)
        print(f"{time.time()-start:.4f} sec")
        return keywords[0][0]