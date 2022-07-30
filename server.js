const mongodb = require("mongodb");
const connectionString = require("./config/connectionString");

mongodb.connect(connectionString, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  module.exports = client;
  require("./config/app");
});
