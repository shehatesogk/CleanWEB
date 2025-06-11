from django.contrib import admin
from django.utils.html import format_html
from .models import Report

@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ('url', 'reported_by', 'is_resolved', 'created_at', 'image_tag')
    list_filter = ('is_resolved',)
    search_fields = ('url', 'reported_by', 'description')

    def image_tag(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100"/>', obj.image.url)
        return "-"
    image_tag.short_description = 'Image'
