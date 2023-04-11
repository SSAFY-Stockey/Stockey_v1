import pyspark
import pandas as pd
import numpy as np
import os
import time
import datetime
import numpy as np

start = time.time()

# create a SparkSession
# from pyspark.sql import SparkSession
# spark = SparkSession.builder.appName('keyword_extraction').getOrCreate()

# specify the HDFS input path (디렉토리 경로)
# hdfs_path = "hdfs://ip-172-26-0-222.ap-northeast-2.compute.internal:9000/user/j8a508/stockey/news/company/포스코케미칼_2022"
df = pd.read_csv("./Article_economy_20220103.csv",names=['날짜','카테고리','언론사','제목','소제목','본문','url'])
contents = df['제목']
print(contents)
# read the data from HDFS into a DataFrame
# sdf = spark.read.parquet(hdfs_path)

#1 tf-idf 임베딩(+Normalize)

from sklearn.feature_extraction.text import TfidfVectorizer

tfidf_vectorizer = TfidfVectorizer(min_df = 3, ngram_range=(1,5))
tfidf_vectorizer.fit(contents)
vector = tfidf_vectorizer.transform(contents).toarray()

vector = np.array(vector)

# 2 DBSCAN Clustering
from sklearn.cluster import DBSCAN

model = DBSCAN(eps=0.1,min_samples=1, metric = "cosine")
#     거리 계산 식으로는 Cosine distance를 이용
#     eps이 낮을수록, min_samples 값이 높을수록 군집으로 판단하는 기준이 까다로움.
result = model.fit_predict(vector)
print('Row count is:',df.shape[0])
print('군집개수 :', result.max())
# train_extract



end = time.time()
print('걸린시간 : ',end-start)

from sklearn.feature_extraction.text import TfidfVectorizer

corpus = [
    'This is the first document.',
    'This document is the second document.',
    'And this is the third one.',
    'Is this the first document?',
]

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(corpus)
print(X)
print(vectorizer.get_feature_names_out())
print(X.shape)