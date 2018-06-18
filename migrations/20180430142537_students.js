exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(users) {
      users.increments('id')
      users.string('username')
      users.string('email')
      users.string('password')
      users.string('color')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
