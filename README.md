# VNGRD
An application for podcasting with subscription tiers

Tech Stack:
- Python 3.6.8
- Django 2.2.7

Dependencies:
- django-currentuser
- postgreSQL
- sendgrid-django

To get started:
- Clone this repository (duh)
- Install Python, Django, django-currentuser, postreSQL (the dev package), and sendgrid-django
- Look at the DATABASES part in settings.py and configure your database to use those settings
- Run `python manage.py makemigrations` then `python manage.py migrate`
- Run `python manage.py runserver` & browse to 127.0.0.1 & hopefully it works!

Some notes:
- We should setup a database that we can both use instead of having two separate DBs with identical settings
- There's probably a better way to get the current user than to add a whole dependency, but I was feeling lazy
- Pretty much everything in the static directory I got from a free online template & just barrowed everything
