from django.shortcuts import render
from django.views import generic
from .models import Article
import logging

logger = logging.getLogger('main')


class NewsIndexView(generic.ListView):
    template_name = "news_index.html"
    context_object_name = "news_list"

    def get_queryset(self):
        """
        Return the news
        """
        return Article.objects.order_by("-pub_date")

    def get(self, request, *args, **kwargs):
        logger.info('In news index view')
        return super().get(request, *args, **kwargs)
    

class NewsDetailView(generic.DetailView):
    model = Article
    template_name = "news_detail.html"

    def get(self, request, *args, **kwargs):
        logger.info('In news detail view')
        return super().get(request, *args, **kwargs)
