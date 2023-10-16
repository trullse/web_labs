from django.db import models
from datetime import datetime


class Article(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField("Publish date", default=datetime(2023, 9, 1, 12, 0))
    content = models.TextField()
    img_source = models.ImageField(upload_to='news/images/')

    def __str__(self) -> str:
        return self.title
    
    def get_brief(self):
        brief = self.content[:150]
        if len(self.content) > 150:
            return f'{brief}...'
        return brief
