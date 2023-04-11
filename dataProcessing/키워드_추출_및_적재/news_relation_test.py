import pandas as pd
import pymysql
import os
from tqdm import tqdm

# db정보 입력
con = pymysql.connect(host='j8a508.p.ssafy.io', user='develop', password='develop', db='stockey', charset='utf8')
cur = con.cursor()

#
path = './test/'
fileList = os.listdir(path)

for file in fileList:
    print(file)
    stockCodeDf = pd.read_csv(path + file)
    hdfs_ids = []
    keywords = []
    for row in stockCodeDf.itertuples():
        hdfs_ids.append(row.hdfs_id)
        keywords.append(row.keyword1)
        keywords.append(row.keyword2)
        keywords.append(row.keyword3)

    hdfs_ids = {'hdfs_ids': tuple(hdfs_ids)}
    sql = "select news_id,hdfs_id from news where hdfs_id in %(hdfs_ids)s"
    cur.execute(sql, hdfs_ids)
    hdfs_id_rst = cur.fetchall()
    hdfs_dic = {}
    for tp in hdfs_id_rst:
        hdfs_dic[tp[1]] = tp[0]
    # print(hdfs_dic)

    keywords = {'keywords': tuple(keywords)}
    sql = "select keyword_id, name from keyword where name in %(keywords)s"
    cur.execute(sql, keywords)
    keywords_rst = cur.fetchall()
    keywords_dic = {}
    for tp in keywords_rst:
        keywords_dic[tp[1]] = tp[0]
    # print(keywords_dic)

    insertData = []
    for row in tqdm(stockCodeDf.itertuples()):
        if (row.hdfs_id not in hdfs_dic):
            print(row.hdfs_id)
            continue
        news_id = hdfs_dic[row.hdfs_id]
        # print(news_id)
        if (row.keyword1 not in keywords_dic):
            print("NOT FOUND : ", row.keyword1)
            continue
        keyword1_id = keywords_dic[row.keyword1]
        if (row.keyword2 not in keywords_dic):
            print("NOT FOUND : ", row.keyword2)
            continue
        keyword2_id = keywords_dic[row.keyword2]
        if (row.keyword3 not in keywords_dic):
            print("NOT FOUND : ", row.keyword3)
            continue
        keyword3_id = keywords_dic[row.keyword3]
        insertData.append((news_id, keyword1_id))
        insertData.append((news_id, keyword2_id))
        insertData.append((news_id, keyword3_id))

    sql = "INSERT INTO news_relation(news_id,keyword_id,news_type) VALUES (%s, %s,'ECONOMY')"
    cur.executemany(sql, insertData)
    con.commit()

con.commit()
con.close()
