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
  getDecksPerUser: function(id) {
    return Decks().where('user_id', id);
  },
  getDeckCards: function(deckId) {
    return Cards().where('deck_id', deckId);
  },
  addNewDeck: function(id, post) {
    return Decks().insert('user_id', id).insert(post);
  },
  addCard: function(deckId, post) {
    return Cards().insert('deck_id', deckId).insert(post);
  },
  getUserScores: function(id) {
    return Points().where('user_id', id);
  }
}