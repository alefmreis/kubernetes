const Mongoose = require('mongoose');
const env = require('../application.environment')

Mongoose.Promise = global.Promise;

class Database {

  static get conn() {
    if (!Database.connection) {
      throw new Error('Database is not connected!');
    }
    return Database.connection;
  }

  static connect() {
    Database.connection = Mongoose.createConnection(env.mongoURI, { useNewUrlParser: true });
  }
}

module.exports = Database;
