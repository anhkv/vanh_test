const containerMiddleware = require('./middleware/containerMiddleware');
const Koa                 = require('koa');

const app                 = new Koa();

app.use(containerMiddleware.numberMiddleware);
app.use(containerMiddleware.run);
app.listen(2710);