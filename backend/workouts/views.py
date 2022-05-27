from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Workout
from .serializers import *
from django.shortcuts import get_object_or_404

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_workouts(request):
    workouts = Workout.objects.all()
    serializer = WorkoutSerializer(workouts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_muscle_groups(request):
    muscle_groups = Muscle_Groups.objects.all()
    serializer = Muscle_GroupSerializer(muscle_groups, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_workouts(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = WorkoutSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        workouts = Workout.objects.filter(user_id=request.user.id)
        serializer = WorkoutSerializer(workouts, many=True)
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny]) 
def workout_by_detail(request, pk):
    workout = get_object_or_404(Workout, pk=pk)
    if request.method == "GET":
        # workouts = Workout.objects.filter(video_id=pk)
        serializer = WorkoutSerializer(workout, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        # workout = get_object_or_404(Workout, pk=pk)
        serializer = WorkoutSerializer(workout, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        workout.delete
        return Response(status=status.HTTP_204_NO_CONTENT)