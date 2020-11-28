const mongodb = require('mongodb');
const connectionString = require('./config/connectionString');
const PORT = process.env.PORT || 7788;

mongodb.connect(
    connectionString,
    { useUnifiedTopology: true },
    (err, client) => {
        if (err) throw err;

        module.exports = client;
        const app = require('./config/app');

        app.listen(PORT, () =>
            console.log(
                `Server started on port ${PORT} and Connected to ${client.s.options.dbName} database.`
            )
        );
    }
);
