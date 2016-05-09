module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/decks'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};