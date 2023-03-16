from korea_news_crawler.articlecrawler import ArticleCrawler
import sys


start = sys.argv[1]
end = sys.argv[2];

Crawler = ArticleCrawler()  
Crawler.set_category("economy") 
Crawler.set_date_range(start, end)
Crawler.start() 