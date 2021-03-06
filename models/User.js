const { ObjectId } = require('mongodb');

const korisnici = require('../server').db().collection('korisnici');

let User = function (data) {
    this.data = data;
    this.errors = [];
};

User.getOneByID = async (reqID) => {
    const query = { _id: ObjectId(reqID) };
    const options = { projection: { password: 0, token: 0 } };

    return await korisnici.findOne(query, options);
};

module.exports = User;
