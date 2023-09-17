import json, pika, os, django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "blog_admin.settings")
django.setup()

from posts.models import Post


#creating a connection
params = pika.URLParameters('amqps://moalafqa:otGsjLp8Z2vFanH5EGl8yh8f0XtxSaBd@lionfish.rmq.cloudamqp.com/moalafqa')
connection = pika.BlockingConnection(params)


#creating and declaring a channel and queue
channel =  connection.channel()
channel.queue_declare(queue="admin_queue")


def callback(ch, method, properties, body):
    data = json.loads(body)
    print(data)
    
    if properties.content_type == "update_likes":
        print("##____Starting update event____##")
        post = Post.objects.get(id = data["id"])
        post.likes = data["likes"]
        post.save()
        print("##____Update successfull____##")
        
        

channel.basic_consume(queue = "admin_queue", on_message_callback= callback, auto_ack=True)
print("Starting consuming ")
channel.start_consuming()
channel.close()