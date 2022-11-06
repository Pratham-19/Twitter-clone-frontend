from django.db import models
from django.contrib.auth import get_user_model
User= get_user_model()

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    id_user = models.IntegerField()
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    profileimg= models.ImageField(upload_to='profile_images',default='default-pic.jpg')

    def __str__(self):
        return self.user.username