
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.schema.table('users', t => {
    // t.string('salt').notNullable()
    // t.string('encrypted_password').notNullable()
    t.dropColumn('salt')
    t.dropColumn('encrypted_password')
    // t.string('password').notNullable()
  })
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'jcuser', email: 'jcuser@gmail.com', password: parseInt('123456') },
        { username: 'anauser', email: 'anauser@gmail.com', password: parseInt('123456') },
        { username: 'check', email: 'check@gmail.com', password: parseInt('123456') }
      ])
    })
}
