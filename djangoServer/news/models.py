from django.db import models

class News(models.Model):
    news_id = models.BigAutoField(primary_key=True)
    category = models.CharField(max_length=45, blank=True, null=True)
    hdfs_id = models.CharField(max_length=100, blank=True, null=True)
    news_url = models.CharField(max_length=2083, blank=True, null=True)
    pressed_at = models.DateTimeField(blank=True, null=True)
    title = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'news'