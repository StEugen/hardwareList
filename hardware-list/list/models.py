from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models import JSONField


class Hardware(models.Model):
    hardware_name = models.TextField(null=False)
    hardware_number = models.TextField(unique=True, null=False)
    comment = models.TextField()
    cabinet = models.ForeignKey('list.cabinets', blank=True, null=True, on_delete=models.DO_NOTHING, related_name='Hardware')


    def __str__(self):
        return self.hardware_name


class cabinets(models.Model):
    cabinet = models.TextField(unique=True, null=False)

    def __str__(self):
        return self.cabinet
    

   