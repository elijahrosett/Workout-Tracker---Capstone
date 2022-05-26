from datetime import date
from enum import auto
from tkinter import CASCADE
from django.db import models
from django.forms import DateField, DateTimeField
from authentication.models import User


class Muscle_Groups(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Movements(models.Model):
    name = models.CharField(max_length=100)
    muscle_group = models.ForeignKey(Muscle_Groups, on_delete=models.CASCADE) 
    def __str__(self):
        return self.name


class Workout(models.Model):
    name = models.CharField(max_length=200, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    muscle_group = models.ForeignKey(Muscle_Groups, on_delete=models.CASCADE )
    movement = models.ForeignKey(Movements, on_delete=models.CASCADE)
    sets = models.IntegerField()
    reps = models.IntegerField()
    def __str__(self):
        return self.name
    
    

class Full_Workout(models.Model):
    workouts = models.ManyToManyField(Workout)
    date = models.DateField(null=True)