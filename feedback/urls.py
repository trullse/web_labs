from django.urls import path

from . import views

app_name = "feedback"
urlpatterns = [
    # # ex: /feedback/
    # path("", views.NewsIndexView.as_view(), name="news_index"),
    # # ex: /news/2
    # path("<int:pk>/", views.NewsDetailView.as_view(), name="news_detail"),
]