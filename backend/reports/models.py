from django.db import models

class Report(models.Model):
    url = models.URLField(verbose_name="Ссылка на подозрительный контент")
    reported_by = models.CharField(max_length=255, blank=True, verbose_name="Отправитель жалобы")
    category = models.CharField(max_length=100, verbose_name="Категория жалобы", default="other")
    description = models.TextField(verbose_name="Описание жалобы")
    is_resolved = models.BooleanField(default=False, verbose_name="Обработано?")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата и время")
    image = models.ImageField(upload_to='report_images/', blank=True, null=True)


    def __str__(self):
        return f"{self.url} — {self.category} — от {self.reported_by or 'аноним'}"
