var express = require('express');
var router = express.Router();
var queries = require('../../../queries');

router.get('/', function(req, res, next) {
  queries.getDecks()
  .then(function(data) {
    res.status(200)
    .json({
      data: data,
      message: 'this worked!'
    })
  })
});

module.exports = router;
