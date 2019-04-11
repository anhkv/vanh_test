module.exports = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'nodeApp',
    password : '01629026552',
    database : 'training'
  }
});