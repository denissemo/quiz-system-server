# quiz-system-server
RESTful service for QUIZ system

# Install and start project

Requires [Node.js](https://nodejs.org/) v11+ to run, and PostgreSQL v9+.

```
$ npm install pm2 -g
```
Development start
```
$ sudo -u postgres psql
# create database quiz_development;
# create user quiz with encrypted password 'quiz';
# grant all privileges on database quiz_development to quiz;
```

```
$ git clone https://github.com/denissemo/quiz-system-server.git
$ cd quiz-system-server/
$ npm install
$ npm run migrate
$ npm run db:seed
$ npm run dev-start
```
