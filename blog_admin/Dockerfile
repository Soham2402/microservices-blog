FROM python:3.9

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt app/tmp/requirements.txt

RUN ls -a && \
    pip install -r app/tmp/requirements.txt && \
    rm -rf /tmp

COPY . /app/

RUN ls 

CMD python manage.py runserver 0.0.0.0:8000
