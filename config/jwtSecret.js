require('dotenv').config();

const jwtSecret = process.env.JWTSECRET;

module.exports = jwtSecret;
