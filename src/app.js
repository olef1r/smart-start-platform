import express from 'express';
import postgres from './services/index';

const app = express();

function startExpress() {
  app.set('port', process.env.PORT);
  app.listen(app.get('port'), () => {
    console.log(`Express server listening on port ${app.get('port')}`);
  });
};

function onError(err) {
  console.error(err);
  console.error('Express server not started.');
  console.error(`Message: ${err.message}`);
};

function start() {
  postgres
  .checkConnection()
  .then(startExpress)
  .catch(onError);
}

function stop() {
  app.close();
}

export default {
  start,
  stop
}