from django.db import models

from accounts.models import TeachingAssistantProfile, TeachingAssistantSupervisorProfile

from datetime import datetime


class Course(models.Model):
    name = models.CharField(max_length=128)
    code = models.CharField(max_length=8, help_text="Enter the Course Code")
    supervisor = models.ForeignKey(TeachingAssistantSupervisorProfile, on_delete=models.CASCADE)

    def __str__(self):
        return self.code


class Assignment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    teaching_assistant = models.ForeignKey(TeachingAssistantProfile, on_delete=models.CASCADE)

    def __str__(self):
        return "{}({})".format(self.course, self.teaching_assistant)


class Feedback(models.Model):
    STATUS = (
        ('1', 'UnReviewed'),
        ('2', 'Approved'),
        ('3', 'Changes Requested')
    )

    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    duties_completed = models.CharField(max_length=256)
    comment = models.CharField(max_length=256, blank=True, null=True, help_text="Enter Supervisor Comment")
    status = models.CharField(max_length=1, choices=STATUS, default='1')
    date_submitted = models.DateTimeField(auto_now_add=True)
    date_approved = models.DateTimeField(blank=True, null=True)

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        if self.status == '2':
            self.date_approved = datetime.now()
        else:
            self.date_approved = None
        super().save()
