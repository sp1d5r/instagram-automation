release: python backend/manage.py migrate
release: sh -c 'cd ./frontend/ && npm run build'
web: sh -c 'cd backend && gunicorn instagram_automation.wsgi --log-file -'
