require('dotenv').config();

const { DB_CONNECTIONSTRING: connectionString } = process.env;

module.exports = connectionString;
