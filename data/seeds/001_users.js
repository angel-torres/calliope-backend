
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {firstName: 'Rick', lastName: 'Sanchez', username: 'ricksanchez', email: 'ricksanchez@gmail.com', password:'ricksanchez'},
      ]);
    });
};
