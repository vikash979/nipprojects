# Generated by Django 2.2.5 on 2020-06-08 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='socialmedia_menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('menu_name', models.CharField(max_length=200, unique=True)),
                ('url_link', models.URLField(blank=True)),
            ],
        ),
    ]
