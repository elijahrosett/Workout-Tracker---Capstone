from django.urls import path, include
from workouts import views



urlpatterns = [
    path('', views.user_workouts),
    path('all/', views.get_all_workouts),
    path('<pk>/', views.workout_by_detail),
]
