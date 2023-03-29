import pandas as pd
df = pd.read_csv("real종목산업v2.csv")[['종목명','대분류명','소분류명']]

#STEP 1
import pymysql

# STEP 2: MySQL Connection 연결
con = pymysql.connect(host='호스트명', user='유저명', password='비밀번호',
                      db='DB명', charset='utf8') # 한글처리 (charset = 'utf8')



for i in range(len(df)):
    name = df.loc[i]['종목명']
    big_category = df.loc[i]['대분류명']
    small_category = df.loc[i]['소분류명']
    # STEP 3: Connection 으로부터 Cursor 생성
    cur = con.cursor()


    # 해당 산업명이 존재하는지 체크
    cur.execute("SELECT * FROM industry WHERE name = %s",small_category)
    cnt = cur.rowcount
    # 존재한다면 continue
    if cnt > 0 :
        continue
    
    sql = "INSERT INTO industry(category,name) VALUES (%s, %s)"
    # STEP 4: SQL문 실행 및 Fetch
    cur.execute(sql,(big_category,small_category))
    # 데이타 Fetch
    rows = cur.fetchall()
    
    

con.commit()
con.close()
