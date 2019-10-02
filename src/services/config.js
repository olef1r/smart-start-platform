require('dotenv').config();

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.NODE_ENV === 'test' ? 'smart-start-platform-test' : 'smart-start-platform',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres'
};