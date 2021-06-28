#!/bin/sh
python3 backend/manage.py makemigrations instamation
python3 backend/manage.py migrate instamation
/bin/sh -ec 'heroku local &'
/bin/sh -ec 'cd frontend && npm start'

