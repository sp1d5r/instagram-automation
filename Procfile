release:  sh -c 'python backend/manage.py migrate cd ./frontend/ && npm run build'
web: sh -c 'cd backend && gunicorn instagram_automation.wsgi --log-file -'
