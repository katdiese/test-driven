
exports.up = function(knex, Promise) {
  return knex.schema.createTable('points', function(table) {
    table.increments('points_id');
    table.integer('percentage_correct');
    table.integer('user_id').references('user_id').inTable('users');
    table.integer('deck_id').references('deck_id').inTable('decks');
    table.date('date_scored').defaultTo('NOW()');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('points');
};
