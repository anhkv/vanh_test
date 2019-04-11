const middleware = require('./knexMiddleware/containerMiddleware');
const Koa = require('koa');

const app = new Koa();

app.use(middleware.findUser);
app.use(middleware.reponse);
app.listen(3000);