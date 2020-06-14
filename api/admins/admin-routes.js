const Router = require('koa-router');
// const Auth = require('../');

// const Servers = require('../controllers/server');

const router = new Router({
    prefix: '/v1'
});

router.get('/', (ctx) => {
    ctx.body = {
        test: 'Hello world'
    }
})

module.exports = router;
