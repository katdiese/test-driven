
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table) {
    table.increments('card_id');
    table.integer('deck_id').references('deck_id').inTable('decks');
    table.text('question');
    table.text('answer');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
