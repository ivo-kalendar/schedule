require('dotenv').config();

const dbName = process.env.DB_NAME;

module.exports = dbName;