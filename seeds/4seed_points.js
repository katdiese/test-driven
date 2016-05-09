var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'points',
  file: 'data/points.csv'
});