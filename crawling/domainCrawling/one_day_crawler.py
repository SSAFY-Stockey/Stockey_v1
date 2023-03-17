import subprocess as sp
import sys
import calendar
import os

# 기간내 date 뽑아오기
def make_date(date):
    mate_dates = []
    for year in range(date['start_year'], date['end_year'] + 1):
        if date['start_year'] == date['end_year']:
            target_start_month = date['start_month']
            target_end_month = date['end_month']
        else:
            if year == date['start_year']:
                target_start_month = date['start_month']
                target_end_month = 12
            elif year == date['end_year']:
                target_start_month = 1
                target_end_month = date['end_month']
            else:
                target_start_month = 1
                target_end_month = 12

        for month in range(target_start_month, target_end_month + 1):
            if date['start_month'] == date['end_month']:
                target_start_day = date['start_day']
                target_end_day = date['end_day']
            else:
                if year == date['start_year'] and month == date['start_month']:
                    target_start_day = date['start_day']
                    target_end_day = calendar.monthrange(year, month)[1]
                elif year == date['end_year'] and month == date['end_month']:
                    target_start_day = 1
                    target_end_day = date['end_day']
                else:
                    target_start_day = 1
                    target_end_day = calendar.monthrange(year, month)[1]

            for day in range(target_start_day, target_end_day + 1):
                if len(str(month)) == 1:
                    month = "0" + str(month)
                if len(str(day)) == 1:
                    day = "0" + str(day)

                # 날짜별로 Page Url 생성
                crawling_date = str(year) +"-"+ str(month) +"-"+ str(day)
                mate_dates.append(crawling_date)
    return mate_dates


start_date = sys.argv[1]
end_date = sys.argv[2]

start = list(map(int, start_date.split("-")))
end = list(map(int, end_date.split("-")))

# Setting Start Date
start_year, start_month, start_day = start

# Setting End Date
end_year, end_month, end_day = end

args = [start_year, start_month, start_day, end_year, end_month, end_day]

date = {'start_year': 0, 'start_month': 0, 'start_day' : 0, 'end_year': 0, 'end_month': 0, 'end_day':0}
for key, value in zip(date, args):
    date[key] = value

dates = make_date(date)
print(dates)
print(os.getcwd())

for date in  dates:
    sp.run(["python","korea_economy.py",date,date])





