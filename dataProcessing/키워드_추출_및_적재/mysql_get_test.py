import pandas as pd
import pymysql

# Connect to the database
conn = pymysql.connect(host='j8a508.p.ssafy.io', user='develop', password='develop', db='stockey', charset='utf8')

# Query the data from the table
sql = "SELECT * FROM news where category = 'economy'"
df = pd.read_sql(sql, conn)

# Close the database connection
conn.close()

# Print the dataframe
print(df.head())
print(df.shape)