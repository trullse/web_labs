# Generated by Django 4.2.5 on 2023-09-21 22:35

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('feedback', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='pub_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Publish date'),
        ),
    ]
