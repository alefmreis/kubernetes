const service = require('./user.service');

class UserController {
  async create(ctx) {
    try {
      const { body } = ctx.request;

      if (!body.email || !body.password) {
        throw new Error('Missing fields! check if email or password');
      }

      await service.create(body);

      ctx.status = 201;
      ctx.body = '';
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        message: 'Error trying to create a user',
        error: err.toString()
      };
    }
  }

  async login(ctx) {
    try {
      const { body } = ctx.request;

      if (!body.email || !body.password) {
        throw new Error('Missing fields! check if email or password');
      }

      const res = await service.login(body);

      ctx.status = 200;
      ctx.body = { data: res };
    } catch (err) {

      ctx.status = 500;
      ctx.body = {
        message: 'Error trying to login',
        error: err.toString()
      };
    }
  }

  async delete(ctx) {
    try {
      const { body } = ctx.request;

      if (!body.email || !body.password) {
        throw new Error('Missing fields! check if email or password');
      }

      const res = service.delete(body);
      ctx.status = 200;
      ctx.body = res;
    } catch (err) {

      ctx.status = 500;
      ctx.body = {
        message: 'Error trying to delete user',
        error: err.toString()
      };
    }
  }


}

module.exports = new UserController();
