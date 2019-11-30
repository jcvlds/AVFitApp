// const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  environment: process.env.NODE_ENV || 'development',
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
