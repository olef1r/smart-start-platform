import Sequelize from 'sequelize';
import config from './config';

export const sequelize = new Sequelize(config.database, config.username, config.password, config);

function checkConnection() {
  return sequelize.authenticate().catch(err => {
    throw new Error(`Postgres is down. ${err}`);
  });
}

export default {
  checkConnection
};


