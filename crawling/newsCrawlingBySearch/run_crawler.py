import sys
import subprocess as sp
import calendar


if len(sys.argv) < 3:
    print("Usage: python run_crawler.py [start YYYY] [end YYYY]")
    exit(1)
else:
    start_year = int(sys.argv[1])
    end_year = int(sys.argv[2])

    if start_year > end_year:
        print("Year argument must be [start YYYY] <= [end YYYY]")
        exit(1)

    print(f"{start_year} ~ {end_year} year crawling start...")

    for cur_year in range(start_year, end_year + 1):
        for cur_month in range(1, 13):
            cur_month_last_day = calendar.monthrange(cur_year, cur_month)[1]
            # year month start end
            sp.call(f'python news_crawling_complete.py {cur_year} {cur_month} 1 {cur_month_last_day}')