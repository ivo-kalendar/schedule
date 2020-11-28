const user = 'ivoUser';
const password = '123ivo123';
const db = 'CompassData';

module.exports = connectionString = `mongodb+srv://${user}:${password}@cluster0.shjby.mongodb.net/${db}?retryWrites=true&w=majority`;
