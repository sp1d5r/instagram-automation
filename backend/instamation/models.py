from django.db import models
from django.contrib.postgres.fields import ArrayField
from jsonfield import JSONField


'''
LabRats vs Researchers 
 - LabRats are users you are trying to get to follow you,
 - You are the researcher, collect as much relevant information about users that you're trying to follow 
 - use it to figure out which rats are likely to be caught.

'''


class LabRat(models.Model):
    """
    LabRats are the users you are trying to interact with,
    users you are trying to get to follow you.
    """
    username = models.CharField(max_length=30, primary_key=True)
    interactions = ArrayField(JSONField(), blank=True)
    followers = models.IntegerField(default=0)
    following = models.IntegerField(default=0)
    bio_length = models.IntegerField(default=0)

    def _str_(self):
        return self.username


"""
interactions: 
    [{
    researcher_name : username 
    requested_at : date requested
    successful : true/false
    }]
"""


class Researcher(models.Model):
    username = models.CharField(max_length=30, primary_key=True)
    caught_rats = ArrayField(JSONField(), blank=True)
    escaped_rats = ArrayField(JSONField(), blank=True)
    processing_rats = ArrayField(JSONField(), blank=True)

    def _str_(self):
        return self.username


"""
caught_rats: 
    [{
    lab_rat_name : (String) username 
    capture_time : (Date/Time) date caught
    method_of_capture : (String) how they got caught
    person_of_interest : (String) username of person you were following
    }]

escaped_rats: 
    [{
    lab_rat_name : (String) username 
    request_time : (Date/Time) date requested
    person_of_interest : (String) username of person you were following
    }]
    
processing_rats:
    [{
    lab_rat_name : (String) username 
    request_time : (Date/Time) date requested
    person_of_interest : (String) username of person you were following
    }]
"""