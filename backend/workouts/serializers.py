from asyncore import read
from rest_framework import serializers
from .models import *


class WorkoutGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ['id', 'muscle_group', 'movement', 'sets', 'reps', 'date']
        depth = 1
class WorkoutPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ['muscle_group', 'movement', 'sets', 'reps', 'date']
        
       
class MovementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movements
        fields = ['id', 'name', 'muscle_group']
       

class Muscle_GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Muscle_Groups
        fields = ['id', 'name']
        

class Full_WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Full_Workout
        fields = ['workouts', 'date']

