from rest_framework import serializers
from .models import *


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ['name', 'muscle_group', 'movement', 'sets', 'reps']
        depth = 1

class MovementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movements
        fields = ['name', 'muscle_group']
       

class Muscle_GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Muscle_Groups
        fields = ['name']

class Full_WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Full_Workout
        fields = ['workouts', 'date']
