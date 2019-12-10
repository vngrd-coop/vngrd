from django.http.response import HttpResponse
from django.core import serializers
from post.models import Post

def all_posts(request):
    if(request.method == 'GET'):
        data = serializers.serialize('json', Post.objects.all())
        return HttpResponse(content=data, content_type='text/javascript')
    else:
        return HttpResponse(status=400, reason='No POSTing allowed!')
