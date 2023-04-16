require('dotenv').config();

const connectionString = process.env.DB_CONNECTIONSTRING;

module.exports = connectionString;
