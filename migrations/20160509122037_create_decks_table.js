
exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', function(table) {
    table.increments('deck_id');
    table.string('title');
    table.text('image_url');
    table.date('create_date').defaultTo('NOW()');
    table.text('description');
    table.integer('user_id').references('user_id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('decks');
};
