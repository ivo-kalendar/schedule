const korisnici = require('../server').db().collection('korisnici');

let Korisnik = function (data) {
    this.data = data;
    this.errors = [];
};

Korisnik.getAll = async () => {
    return await korisnici.find().sort({ date: -1 }).toArray();
};

Korisnik.add = async (body) => {
    body.date = new Date();
    body.pozicija = 'magacioner';

    await korisnici.insertOne(body);
};

Korisnik.edit = async (nameIn, nameOut) => {
    await korisnici.updateOne({ ime: nameIn }, { $set: { ime: nameOut } });
};

Korisnik.delete = async (nameIn) => {
    await korisnici.deleteOne({ ime: nameIn });
};

module.exports = Korisnik;
