var express = require('express');
var router = express.Router();
var queries = require('../../../queries');

router.get('/:id/decks', function(req, res, next) {
  queries.getDecksPerUser(req.params.id)
  .then(function(data) {
    res.status(200)
    .json({
      data: data,
      message: 'this worked!'
    })
  })
});

router.get('/decks/:deckId', function(req, res, next) {
  queries.getDeckCards(req.params.deckId)
  .then(function(data) {
    res.status(200)
    .json({
      data: data,
      message: 'this worked too!'
    })
  })
});

router.get('/:id/scores', function(req, res, next) {
  queries.getUserScores(req.params.id)
  .then(function(data) {
    res.status(200)
    .json({
      data: data,
      message: 'wheee!!!'
    })
  })
})

router.post('/:id/decks', function(req, res, next) {
  queries.addNewDeck(req.params.id)
  .then(function(post) {
    res.status(200)
    .json(post[0]);
  })
});

router.post('/:deckId/add-card', function(req, res, next) {
  queries.addCard(req.params.deckId)
  .then(function(post) {
    res.status(200)
    .json(post[0]);
  })
})


module.exports = router;
