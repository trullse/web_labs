from django.shortcuts import render
from django.views import generic
import logging
from news.models import Article
from typing import Any
import requests


logger = logging.getLogger('main')


class IndexView(generic.TemplateView):
    logger.warning('in index view')
    template_name = "index.html"

    def get(self, request, *args, **kwargs):
        logger.info('In index view')
        return super().get(request, *args, **kwargs)
    
    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context['last_article'] = Article.objects.order_by('-pub_date').first()
        return context
    

class AdditionalView(generic.DetailView):
    template_name = "additional.html"
    context_object_name = "additional"
    joke_info = {}
    model = joke_info

    def get(self, request, *args, **kwargs):
        logger.info('In additional view')

        url = 'https://official-joke-api.appspot.com/jokes/programming/random'
        joke_info = requests.get(url).json()
        self.joke_info = joke_info
        logger.debug(joke_info)
        context = get_ip_request()
        logger.debug(f'context: {context}')

        return render(request, self.template_name, context)


def get_ip_request():
    logger.info('connecting to the joke API')
    url = 'https://official-joke-api.appspot.com/jokes/programming/random'
    ip_request = requests.get(url).json()
    ip_request = ip_request[0]
    setup = ip_request['setup']
    punchline = ip_request['punchline']
    logger.debug(ip_request)
    return {'setup': setup, 'punchline': punchline}


class AboutView(generic.TemplateView):
    template_name = "about.html"

    def get(self, request, *args, **kwargs):
        logger.info('In about view')
        return super().get(request, *args, **kwargs)
    

class FAQView(generic.TemplateView):
    template_name = "faq.html"

    def get(self, request, *args, **kwargs):
        logger.info('In faq view')
        return super().get(request, *args, **kwargs)
    

class ContactsView(generic.TemplateView):
    template_name = "contacts.html"

    def get(self, request, *args, **kwargs):
        logger.info('In contacts view')
        return super().get(request, *args, **kwargs)
