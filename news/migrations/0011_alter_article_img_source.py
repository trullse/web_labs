# Generated by Django 4.2.5 on 2023-09-19 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0010_alter_article_img_source'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='img_source',
            field=models.ImageField(upload_to='static/images/'),
        ),
    ]
