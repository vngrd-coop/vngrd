# VNGRD
A cooperative podcasting platform

## Tech Stack:
- Django for the backend API
- PostgreSQL for the database
- ReactJS to render the frontend
- SendGrid for automatic emailing
- Heroku for web hosting (for now)

## Getting setup:
- `git clone https://github.com/vngrd-coop/vngrd.git`
- `pip install -r requirements.txt`
- Make a local postgres database 
- Take a look at /vngrd/settings.py
  - Create a file named set.env where you export those environment variables used in settings.py
  - I think SECRET_KEY can be anything for now, but if not lmk & I'll give you what I use
  - If you want to work on auto emailing users (like for password reset, etc), lmk & I'll give you that API key
- `. set.env`
- `python manage.py makemigrations` -> makes the SQL code
- `python manage.py migrate` -> puts that SQL in your local DB
- `cd vngrd-frontend && npm run build`
- ` cd .. && python manage.py runserver`
- Go to 127.0.0.1:8000 in your browser

## Current State (updated 12/18/19)
- Signup works
- Login works
- Checkout vngrd-frontend/component_plan.txt for an outline of how I vision the product working
