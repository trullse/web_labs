from django.urls import path

from . import views

app_name = "info"
urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    # ex: /additional
    path("additional/", views.AdditionalView.as_view(), name="additional"),
    # ex: /about
    path("about/", views.AboutView.as_view(), name="about"),
    # ex: /faq
    path("faq/", views.FAQView.as_view(), name="faq"),
    # ex: /contacts
    path("contacts/", views.ContactsView.as_view(), name="contacts"),
    # ex: /privacy
    path("privacy/", views.PrivacyPolicyView.as_view(), name="privacy"),
    # ex: /vacancies
    path("vacancies/", views.VacanciesView.as_view(), name="vacancies"),
]