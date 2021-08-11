const Koa = require('koa');
const cors = require('koa2-cors');
const Database = require('./data/database');
const env = require('./application.environment')


class Application {
  constructor() {
    this.server = new Koa();
    this.setMiddlewares();
    this.setDatabase();
    this.setRoutes();
  }

  setMiddlewares() {
    this.server.use(require('koa-bodyparser')());
    this.server.use(cors({
      origin: '*',
      allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      credentials: true
    }));
  }

  setRoutes() {
    require('./routes/routes').resolve(this.server);
  }

  setDatabase() {
    Database.connect();
  }

  connect() {
    this.server.listen(env.port);
    console.log(`API server is listening on port ${env.port}!`);
  }
}


module.exports = Application;
