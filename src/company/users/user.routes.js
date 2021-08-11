const Router = require('koa-router');
const controller = require('./user.controller');

const routes = new Router();

routes.prefix('/api/usuarios');
routes.post('/', controller.create);
routes.post('/login', controller.login);

module.exports = routes;
