from django.shortcuts import render
from django.views import generic
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
import logging
from .models import Feedback

logger = logging.getLogger('main')


class FeedbackIndexView(generic.ListView):
    template_name = "feedback_index.html"
    context_object_name = "feedback_list"

    def get_queryset(self):
        """
        Return the feedbacks
        """
        return Feedback.objects.order_by("-pub_date")

    def get(self, request, *args, **kwargs):
        logger.info('In feedback index view')
        return super().get(request, *args, **kwargs)


class FeedbackAddView(LoginRequiredMixin, generic.CreateView):
    model = Feedback
    template_name = "feedback_add.html"
    fields = ("estimation", "text")
    success_url = reverse_lazy("feedback:feedback_index")

    def form_valid(self, form):
        form.instance.name = self.request.user
        return super().form_valid(form)
    