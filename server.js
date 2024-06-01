const mongodb = require("mongodb");
const connectionString = require("./config/connectionString");
const dbName = require("./config/dbName");

mongodb.connect(
    connectionString, 
    { useUnifiedTopology: true, dbName }, 
    (err, client) => {
        if (err) throw err;

        module.exports = client;
        require("./config/app");
    }
);
