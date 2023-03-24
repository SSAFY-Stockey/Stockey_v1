import pandas as pd
import os

print(os.getcwd())

df = pd.read_csv('../input/Top100CompaniesTest.csv', encoding='cp949')
print(df)

column_list = df.iloc[:, 0].tolist()

print(column_list)