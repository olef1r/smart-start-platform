import express from 'express';

const app = express();

function startExpress() {
  app.set('port', process.env.PORT);
  app.listen(app.get('port'), () => {
    console.log(`Express server listening on port ${app.get('port')}`);
  });
}

function start() {
  startExpress();
}

function stop() {
  app.close();
}

export default {
  start,
  stop
}