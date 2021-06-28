#!/bin/sh
brew install postgresql
brew install python3
pip install pipenv
python3 -m pipenv shell
python3 -m pipenv install