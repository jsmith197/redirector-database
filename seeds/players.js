
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 0,
          username: 'Borra',
          email: 'Jobsmith9@gmail.com',
          password: 'P7sm0njx',
          color: 'white',
       },
       {
         id: 1,
         username: 'Vandalf',
         email: 'Jobspacemansmith@gmail.com',
         password: 'P7sm0njx',
         color: 'red',
       },
      ]);
    });
};
