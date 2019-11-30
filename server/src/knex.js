const config = require('./config/config')

var environment = config.environment
var knexConfig = require('./knexfile')[environment]

module.exports = require('knex')(knexConfig)
