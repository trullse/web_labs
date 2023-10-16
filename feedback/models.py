from django.db import models
from django.utils import timezone


class Feedback(models.Model):
    class Estimation(models.IntegerChoices):
        VERY_BAD = 1
        BAD = 2
        OK = 3
        GOOD = 4
        VERY_GOOD = 5

    name = models.CharField(max_length=100)
    pub_date = models.DateTimeField("Publish date", default=timezone.now)
    text = models.TextField()
    estimation = models.IntegerField(choices=Estimation.choices)

    def __str__(self) -> str:
        return self.name
