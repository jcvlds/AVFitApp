
exports.up = async function up (knex) {
  await knex.schema.table('users', t => {
    t.string('name').notNullable()
  })
}

exports.down = function (knex) {
  knex.schema.table('users', t => {
    t.dropColumn('name')
  })
}
