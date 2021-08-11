require('dotenv').config();

const Application = require('./src/_shared/application');

(async () => {
  try {
    const server = new Application();
    await server.connect();
  } catch (error) {
    console.log('Error on start application', error);
  }
})();
