# About The Project
![alt text](https://i.ibb.co/twG3zfy/Screenshot-45.png)
<br>
<br>
Meet-your-Doctor is a web socket and Rest API based web app using which patient can consult doctors.

* Authentication
* Authorization
* Get Doctors list on basis of speciality
* Search Doctor by name and address
* Show online status of Doctor
* one-click chat
* Chat messages saved in database and chatlist area

# Getting started

## Prerequisites

* Install [Node](https://nodejs.org/en/)
* Install [Python](https://www.python.org/)

## Setup

```sh
$ git clone https://github.com/sushant2308/Meet-Your-Doctor.git
$ cd Green-World
```
For backend
```sh
$ virtualenv2 --no-site-packages env
$ source env/bin/activate
(env)$ pip install -r requirements.txt
(env)$ cd backend
(env)$ python manage.py makemigrations
(env)$ python manage.py migrate
(env)$ python manage.py runserver
```

For Frontend
```sh
$ cd frontend
$ npm install
$ npm run
```

# Code Overview

## Dependencies

- [Django](https://docs.djangoproject.com/en/3.2/) - The server for handling and routing HTTP requests
- [Django Rest Framework](https://www.django-rest-framework.org/) - Framework for creating REST Apis
- [React](https://reactjs.org/) - Javascript Library for creating user interface
- [Axios](https://github.com/axios/axios) - HTTP Client for making requests to backend server
- [React-router](https://github.com/remix-run/react-router) - Routing for react App