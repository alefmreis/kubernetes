const jwt = require('jsonwebtoken');

const repository = require('./user.repository');
const env = require('../../_shared/application.environment');

class UserService {

  async create(obj) {
    const user = await repository.findOne({ email: obj.email });


    console.log('user', user)

    if (user) {
      throw new Error('This email already exist');
    }

    return repository.create(obj);
  }

  async login(body) {
    const user = await repository.findOne({ email: body.email, password: body.password });
    if (!user) throw new Error('User nod registered!');

    const token = jwt.sign({ data: { email: user.email, password: user.password } }, env.secret, {
      expiresIn: 60 * 30
    });

    return token;
  }

  async delete(body) {
    const user = await repository.findOne({ email: body.email, password: body.password });
    if (!user) throw new Error('User nod registered!');

    return repository.delete(user.id);
  }


}

module.exports = new UserService();
