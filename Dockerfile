FROM python:3

ENV PYTHONBUFFERED 1

RUN mkdir /vngrd-app
WORKDIR /vngrd-app

COPY requirements.txt /vngrd-app/

RUN pip install -r requirements.txt
COPY . /vngrd-app/

