FROM python:3.9

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt app/tmp/requirements.txt
COPY . /app/

RUN pip install -r app/tmp/requirements.txt  && \
    rm -rf app/tmp  && \
    rm -rf requirements.txt

