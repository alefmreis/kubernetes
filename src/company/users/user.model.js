const Database = require('../../_shared/data/database');
const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const mongooseTimeStamp = require('mongoose-timestamp');

const schema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

schema.plugin(mongooseDelete, { overrideMethods: true });
schema.plugin(mongooseTimeStamp);

module.exports.UserSchema = schema;
module.exports.User = Database.conn.model('User', schema);
