
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', table => {
        table.increments();
        table.integer('user_id', 255).notNullable().references('id').inTable('users').onDelete('CASCADE').index();
        table.string('poemID').notNullable().references('id').inTable('poems').onDelete('CASCADE');
        table.string('comment').notNullable();
        table.integer('likes').notNullable().defaultsTo(0);
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comments');
};
