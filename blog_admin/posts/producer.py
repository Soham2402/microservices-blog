# amqps://ycatgoik:y_ptrae9vcT0vC77EWS8rm04vHrCe6yW@lionfish.rmq.cloudamqp.com/ycatgoik
import pika 


#creating a connection
params = pika.URLParameters('amqps://ycatgoik:y_ptrae9vcT0vC77EWS8rm04vHrCe6yW@lionfish.rmq.cloudamqp.com/ycatgoik')
connection = pika.BlockingConnection(params)

#creating a channel 
channel = connection.channel()
def publish(body):
    channel.basic_publish(exchange='', routing_key='main_queue', body=body)