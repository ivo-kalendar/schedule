const { ObjectId } = require('mongodb');
const korisnici = require('../server').db().collection('korisnici');
const db = require('../server').db()

let User = function (data) {
    this.data = data;
    this.errors = [];
};

User.getTest = async (req, res) => {

    const test = JSON.stringify(db)
    res.json(test)
    // return await korisnici
};

User.getOneByID = async (reqID) => {
    const query = { _id: ObjectId(reqID) };
    const options = { projection: { password: 0, token: 0 } };

    return await korisnici.findOne(query, options);
};

User.getNameByID = async (reqID) => {
    const query = { _id: ObjectId(reqID) };
    const options = { projection: { name: 1, surname: 1, ime: 1 } };

    return await korisnici.findOne(query, options);
};

module.exports = User;
