# Generated by Django 3.2.8 on 2023-11-19 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='delivery_address',
            field=models.CharField(default='', max_length=255),
        ),
    ]