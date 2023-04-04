from django.urls import path,include
from .views import get_cluster_by_keyword,get_cluster_by_domain


app_name = 'news'

urlpatterns = [
    path('keywords/<long:keywordId>/key_phrase', get_cluster_by_keyword, name='keyword'),
    path('domain',get_cluster_by_domain,name='domain')
]