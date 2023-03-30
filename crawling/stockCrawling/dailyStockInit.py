import FinanceDataReader as fdr
import pymysql
import math

con = pymysql.connect(host='j8a508.p.ssafy.io', user='develop', password='develop', db='stockey', charset='utf8')
cur = con.cursor()

cur.execute("SELECT * FROM stock")

stocks = cur.fetchall()
for stock in stocks:
    print(stock[0], stock[2]) #pk code

    df = fdr.DataReader(stock[2], '2023-01-01', '2023-03-01')

    for row in df.iterrows():
        if  math.isnan(row[1]['Change']) : 
            continue
        sql = "INSERT INTO daily_stock(change_rate,close_price,high_price,low_price,open_price,stock_date,volume,stock_id) VALUES(%s, %s, %s,%s,%s, %s, %s,%s)"
        cur.execute(sql, (row[1]['Change'], row[1]['Close'],row[1]['High'], row[1]['Low'], row[1]['Open'], row[0],row[1]['Volume'], stock[0]))
        con.commit()

con.close()