
exports.up = function(knex) {
  return knex.schema.createTable('clients', t => {
    t.increments('id')
    t.string('username')
    t.string('email')
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('clients')
};
