#!/bin/sh
sudo apt-get update
sudo apt-get install postgresql
sudo apt-get install libpq-dev
sudo apt-get install pipenv
python3 -m pipenv shell
python3 -m pipenv install