from django.urls import path

from . import views

app_name = "info"
urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    # ex: /additional
    path("additional/", views.AdditionalView.as_view(), name="additional"),
    # ex: /about
    path("about/", views.AboutView.as_view(), name="about")
]