# Generated by Django 4.0.5 on 2022-09-02 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='mypokemon',
            name='picture',
            field=models.CharField(default='none', max_length=250),
        ),
    ]
