require('dotenv').config();

module.exports = {
  database: 'smart-start-platform',
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres'
};