# from rest_framework import serializers
# from .models import Quiz, Question

# class QuestionSerializer(serializers.ModelSerializer):
#     options = serializers.ListField(child=serializers.CharField())

#     class Meta:
#         model = Question
#         fields = ['question_text', 'options', 'answer']

# class QuizSerializer(serializers.ModelSerializer):
#     questions = QuestionSerializer(many=True)

#     class Meta:
#         model = Quiz
#         fields = ['title', 'color', 'icon', 'questions']

#     def create(self, validated_data):
#         questions_data = validated_data.pop('questions')
#         quiz = Quiz.objects.create(**validated_data)
#         for question_data in questions_data:
#             Question.objects.create(quiz=quiz, **question_data)
#         return quiz


# from rest_framework import serializers
# from .models import Quiz, Question

# class QuestionSerializer(serializers.ModelSerializer):
#     options = serializers.ListField(child=serializers.CharField())

#     class Meta:
#         model = Question
#         fields = ['question_text', 'options', 'answer']

# class QuizSerializer(serializers.ModelSerializer):
#     questions = QuestionSerializer(many=True)

#     class Meta:
#         model = Quiz
#         fields = ['id', 'title', 'color', 'icon', 'questions']

#     def create(self, validated_data):
#         questions_data = validated_data.pop('questions')
#         quiz, created = Quiz.objects.get_or_create(**validated_data)  # Modify this to get or create quiz
#         for question_data in questions_data:
#             Question.objects.create(quiz=quiz, **question_data)
#         return quiz


from rest_framework import serializers
from .models import Quiz, Question

class QuestionSerializer(serializers.ModelSerializer):
    options = serializers.ListField(child=serializers.CharField())

    class Meta:
        model = Question
        fields = ['question', 'options', 'answer']

class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, required=False)

    class Meta:
        model = Quiz
        fields = ['id', 'title', 'color', 'icon', 'questions']
