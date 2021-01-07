const { ObjectId } = require('mongodb');

const korisnici = require('../server').db().collection('korisnici');

let User = function (data) {
    this.data = data;
    this.errors = [];
};

User.getOneByID = async (reqID) => {
    return await korisnici.findOne({ _id: ObjectId(reqID) });
    // return await korisnici.findById(req.korisnik.id).select('-password');
};

module.exports = User;
