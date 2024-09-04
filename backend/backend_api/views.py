# # views.py

# from rest_framework import generics
# from .models import Quiz
# from .serializers import *

# class QuizListView(generics.ListCreateAPIView):
#     queryset = Quiz.objects.all()
#     serializer_class = QuizSerializer

# backend_api/views.py

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Quiz, Question
from .serializers import QuizSerializer, QuestionSerializer


class QuizListView(generics.ListCreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class QuizDetailView(generics.RetrieveUpdateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

    def put(self, request, *args, **kwargs):
        quiz = self.get_object()
        questions_data = request.data.get('questions', [])
        
        # Add new questions
        for question_data in questions_data:
            Question.objects.create(quiz=quiz, **question_data)

        # Return updated quiz with questions
        serializer = self.get_serializer(quiz)
        return Response(serializer.data, status=status.HTTP_200_OK)
