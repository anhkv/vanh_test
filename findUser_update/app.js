
const nunjucks = require('nunjucks');
const Koa      = require('koa');
const Router   = require('koa-router');
const knex     = require('./config');

const app  = new Koa();
var router = new Router();

router.get('/vanh/:name',async (ctx,next) => {
    let data = await knex.select('*').from('users').where('name', 'like', '%'+ctx.params.name+'%');
    ctx.body = nunjucks.render('index.html',{data});
});


app.use(router.routes());
app.listen(65535);