# Generated by Django 4.2.1 on 2023-09-17 14:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pharmacy', '0009_alter_employee_date_of_birth_alter_sale_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sale',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2023, 9, 17, 17, 27, 3, 340623), verbose_name='Date sold'),
        ),
    ]
