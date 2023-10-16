from django.urls import path

from . import views

app_name = "feedback"
urlpatterns = [
    # ex: /feedback/
    path("", views.FeedbackIndexView.as_view(), name="feedback_index"),
    # ex: /feedback/add/
    path("add/", views.FeedbackAddView.as_view(), name="feedback_add"),
]