from datetime import datetime
from dateutil.relativedelta import relativedelta

from django.core.exceptions import ValidationError
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from django.contrib import admin
import logging


logger = logging.getLogger('main')


class Supplier(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class MedicineCategory(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Medicine(models.Model):
    name = models.CharField(max_length=50)
    instruction = models.CharField(max_length=200)
    description = models.CharField(max_length=100)
    price = models.IntegerField()
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    category = models.ForeignKey(MedicineCategory, on_delete=models.CASCADE)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class PharmacyDepartment(models.Model):
    address = models.CharField(max_length=100)
    medicines = models.ManyToManyField(Medicine)

    class Meta:
        ordering = ["address"]

    def __str__(self):
        return self.address


class Sale(models.Model):
    date = models.DateTimeField("Date sold")
    ph_department = models.ForeignKey(PharmacyDepartment, on_delete=models.CASCADE)
    medicines = models.ManyToManyField(Medicine)

    class Meta:
        ordering = ["date"]

    def __str__(self):
        return self.date.__str__()

    def clean(self):
        try:
            if self.date > timezone.now():
                logger.error('Sale date error')
                raise ValidationError("Date is incorrect")
        except TypeError:
            logger.error('Can\'t convert input into date')
            raise ValidationError('Date is incorrect')


class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.ForeignKey(PharmacyDepartment, on_delete=models.CASCADE)
    date_of_birth = models.DateTimeField("Date of Birth")

    def __str__(self):
        return f'{self.user.__str__()} in {self.department}'

    def clean(self):
        try:
            if timezone.now() - relativedelta(years=+18) < self.date_of_birth:  # i duno why it's working this way
                logger.error('Employee\'s age error')
                raise ValidationError("Come back when you're eighteen")
        except TypeError:
            logger.error('Can\'t convert input into date')
            raise ValidationError('Date is incorrect')


class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    img_source = models.ImageField(upload_to='static/pharmacy/images/articles')

    def __str__(self) -> str:
        return self.title

# logger = logging.getLogger(__name__)
