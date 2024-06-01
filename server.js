const mongodb = require("mongodb");
const connectionString = require("./config/connectionString");

mongodb.connect(
    connectionString, 
    { useUnifiedTopology: true, dbName: "CompassData" }, 
    (err, client) => {
        if (err) throw err;

        console.log(client.db().databaseName);
        module.exports = client;
        require("./config/app");
    }
);
