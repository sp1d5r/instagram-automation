Instagram automation 


Instructions - (Ubuntu)

(1) Setting up with ./setup.sh 
* Navigate to project directory 
* Give appropriate permissions to the ./setup.sh file 
```shell
chmod + x setup.sh
```
* run the file
```shell 
  ./setup.sh
```

If that doesn't work, setup using normal way

(1) Setting up python stuff
* sudo apt-get install postgresql
* sudo apt-get install libpq-dev
* sudo apt-get install pipenv

(2) Setting up virtual environment
* python3 -m pipenv shell
* python3 -m pipenv install