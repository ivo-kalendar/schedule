require('dotenv').config();

const {
    DB_SRV: srv,
    DB_USER: user,
    DB_PASSWORD: pass,
    DB_TITLE: db,
    DB_CLUSTER: clus,
    DB_OPTIONS: opt,
} = process.env;

const connectionString = `${srv}://${user}:${pass}@${clus}/${db}?${opt}`;

module.exports = connectionString;
