from django.urls import path, include
from workouts import views



urlpatterns = [
    path('', views.user_workouts),
    path('all/', views.get_all_workouts),
    path('all/musclegroups', views.get_all_muscle_groups),
    path('all/movements', views.get_all_movements),
    path('<pk>/', views.workout_by_detail),
]
