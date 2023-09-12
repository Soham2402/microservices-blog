import pika 

#creating a connection
params = pika.URLParameters('amqps://ycatgoik:y_ptrae9vcT0vC77EWS8rm04vHrCe6yW@lionfish.rmq.cloudamqp.com/ycatgoik')
connection = pika.BlockingConnection(params)

channel =  connection.channel()
channel.queue_declare(queue='main_queue')

def callback(ch, method, properties, body):
    print(body)
    
channel.basic_consume(queue="main_queue",on_message_callback=callback,auto_ack=True)

print("Started Consuming")
channel.start_consuming()
channel.close( )
    
