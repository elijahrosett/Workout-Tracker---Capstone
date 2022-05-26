from django import forms
from .models import Muscle_Groups, Movements

class Workout_Form():
    class Meta:
        model = Muscle_Groups
        fields = ("Legs", "Arms", "Shoulders", "Chest", "Abs")