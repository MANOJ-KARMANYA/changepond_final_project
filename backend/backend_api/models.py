# models.py

from django.db import models

class Quiz(models.Model):
    title = models.CharField(max_length=255)
    color = models.CharField(max_length=7)  # for HEX color codes
    icon = models.CharField(max_length=255)

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, related_name='questions', on_delete=models.CASCADE)
    question = models.TextField()
    options = models.JSONField()  # Stores options as JSON array
    answer = models.CharField(max_length=255)
