const userRoutes = require('../../company/users/user.routes');

class Routing {
  resolve(app) {
    app.use(userRoutes.routes());
  }

}

module.exports = new Routing();
