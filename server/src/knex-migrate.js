const path = require('path')
// import knexMigrate from 'knex-migrate'
const knexMigrate = require('knex-migrate')

async function run() {
  const log = ({ action, migration }) =>
  console.log('Doing ' + action + ' on ' + migration)

  await knexMigrate('up',
    { 
      only: '20191129124057',
      // knexfile: path.dirname('./knex')
      migrations: path.dirname('./db/migrations/20191127161602_encrypt_user_password')
    }, log)
}

run()
