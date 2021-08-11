const { User } = require('./user.model');

class UserRepository {

  create(obj) {
    return User.create(obj);
  }

  findOne(query) {
    return User.findOne(query);
  }

  delete(id) {
    return User.delete({ _id: id });
  }

}

module.exports = new UserRepository();
