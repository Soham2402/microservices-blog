import pika 


#creating a connection
params = pika.URLParameters('amqps://moalafqa:otGsjLp8Z2vFanH5EGl8yh8f0XtxSaBd@lionfish.rmq.cloudamqp.com/moalafqa')
connection = pika.BlockingConnection(params)


#creating a channel 
channel = connection.channel()
def publish(method,body):
    property = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='main_queue', body=body,  properties=property)     