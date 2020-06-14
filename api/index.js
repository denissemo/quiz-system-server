const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const path = require('path');
const cors = require('@koa/cors');

const exceptionLogger = require('../lib/exception-logger');
const requestLogger = require('../lib/request-logger');
const adminRoutes = require('./admins');

const staticPath = path.join(__dirname, '../static');

const app = new Koa();

app.use(exceptionLogger);
app.use(requestLogger);
app.use(cors());
app.use(bodyParser());
app.use(koaStatic(staticPath));

app.use(adminRoutes.routes());

const PORT = process.env.PORT || 3000;
const url = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`App started on ${url}`);
});

module.exports = app;
