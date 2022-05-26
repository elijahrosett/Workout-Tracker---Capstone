from django.urls import path, include
from workouts import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    # path('', views.user_cars),
    path('all/', views.get_all_workouts),
    # path('<pk>/', views.get_all_cars),
]
