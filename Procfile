release: python backend/manage.py migrate
web: sh -c 'cd backend && gunicorn instagram_automation.wsgi --log-file -'