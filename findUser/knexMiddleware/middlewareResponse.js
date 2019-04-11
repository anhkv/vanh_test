const knex = require('../config/config');

module.exports = async (context) => {
    const params = context.query;
    const result = await knex.select('*').from('users').where('name', 'like', '%'+params.name+'%');
    context.body = result || { message: 'abc'};
}