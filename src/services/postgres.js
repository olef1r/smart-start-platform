import Sequelize from 'sequelize';
import config from './config';

export const sequelize = new Sequelize(config.database, config.username, config.password, config);

function check() {
  return sequelize.authenticate().catch(err => {
    throw new Error(`DB is down. ${err}`);
  });
}

export default {
  check
};


