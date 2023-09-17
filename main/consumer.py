import pika, json
from main import Post, db



#creating a connection
params = pika.URLParameters('amqps://moalafqa:otGsjLp8Z2vFanH5EGl8yh8f0XtxSaBd@lionfish.rmq.cloudamqp.com/moalafqa')
connection = pika.BlockingConnection(params)

channel =  connection.channel()
channel.queue_declare(queue='main_queue')

def callback(ch, method, properties, body):
    data = json.loads(body)
    print(data)
    
    print(properties.content_type)
    if properties.content_type == "Data_created":
        post = Post(id = data['id'], title = data['title'], image = data['image'],likes = data['likes'])
        db.session.add(post)
        db.session.commit()
        print("data added")
        
    elif properties.content_type == "Data_updated":
        post = Post.query.get(id = id['id'])
        post.title = data['title']
        post.image = data['image']
        db.session.commit()
        print("data updated")
        
    elif properties.content_type == "Data_deleted":
        post = Post.query.get(data)
        db.session.delete(post)
        db.session.commit() 
        print("data deleted")       
     
channel.basic_consume(queue="main_queue",on_message_callback=callback,auto_ack=True)

print("Started Consuming")
channel.start_consuming()
channel.close( )
    
