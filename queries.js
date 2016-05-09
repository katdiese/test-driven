var knex = require('./db/knex');
function Decks() {
  return knex('decks');
}
function Users() {
  return knex('users');
}
function Cards() {
  return knex('cards');
}
function Points() {
  return knex('points');
}

module.exports = {
  getDecks: function() {
    return Decks().select();
  }
}