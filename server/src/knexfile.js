/* eslint-disable */
module.exports =  {

  // client: 'mysql',
  // connection: {
  //   user: 'jcuser',
  //   password: 'password',
  //   database: 'av_fit_app'
  // }
  test: {
    client: 'mysql',
    // connection: 'postgres://localhost/test_db',
    connection: {
      host: 'localhost',
      user: 'jcuser',
      password: 'password',
      database: 'av_fit_app'
    },
    pool: {
      min: 2, max: 5
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
  development: {
    client: 'mysql',
    // connection: 'postgres://localhost/development_db',
    connection: {
      host: 'localhost',
      user: 'jcuser',
      password: 'password',
      database: 'av_fit_app'
    },
    pool: {
      min: 2, max: 5
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  production: {
    client: 'mysql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2, max: 5
    },
    acquireConnectionTimeout: 10000,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }
}
