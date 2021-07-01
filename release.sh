#!/bin/sh
python3 backend/manage.py makemigrations instamation
python3 backend/manage.py migrate instamation
cd frontend
npm run build
