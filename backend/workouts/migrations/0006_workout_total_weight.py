# Generated by Django 4.0.4 on 2022-06-03 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workouts', '0005_workout_weight'),
    ]

    operations = [
        migrations.AddField(
            model_name='workout',
            name='total_weight',
            field=models.IntegerField(null=True),
        ),
    ]
