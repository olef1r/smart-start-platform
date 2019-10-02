import express from 'express';
import postgres from './services/postgres';

const app = express();

function startService() {
  app.set('port', process.env.PORT);
  app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
  });
};

function error(err) {
  console.error(`Error message: ${err.message}`);
};

function start() {
  postgres
  .check()
  .then(startService)
  .catch(error);
}

function stop() {
  app.close();
}

export default {
  start,
  stop
}