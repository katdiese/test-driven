
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table) {
    table.increments('card_id');
    table.integer('deck_id').references('deck_id').inTable('decks');
    table.text('card_url').defaultTo('https://image.freepik.com/free-icon/question-mark_318-52837.jpg');
    table.text('question');
    table.text('answer');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
