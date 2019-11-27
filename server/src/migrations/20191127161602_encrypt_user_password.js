const { saltHashPassword } = require('../controllers/AuthenticationController')

exports.up = async function up (knex) {
  await knex.schema.table('users', t => {
    // t.string('salt').notNullable()
    // t.string('encrypted_password').notNullable()
  })
  const users = await knex('users')
  await Promise.all(users.map(convertPassword))
  await knex.schema.table('users', t => {
    t.dropColumn('password')
  })

  function convertPassword (user) {
    const { salt, hash } = saltHashPassword(user.password)
    return knex('users')
      .where({ id: user.id })
      .update({
        salt,
        encrypted_password: hash
      })
  }
}

exports.down = function (knex) {
  return knex.schema.table('users', t => {
    t.dropColumn('salt')
    t.dropColumn('encrypted_password')
    t.string('password').notNullable()
  })
}
