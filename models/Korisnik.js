const Joi = require('joi');
const korisnici = require('../server').db().collection('korisnici');

// let Korisnik = function (data) {
//     this.data = data;
//     this.errors = [];
// };

let Korisnik = {};

Korisnik.getAll = async () => {
    return await korisnici.find().sort({ date: -1 }).toArray();
};

Korisnik.add = async (body) => {
    const schema = Joi.object({
        ime: Joi.string().alphanum().min(4).max(15).required(),

        password: Joi.string()
            .min(4)
            .max(15)
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),
    });

    const value = await schema.validateAsync(body);

    value.date = new Date();
    value.pozicija = '';
    value.adminAprovel = false;
    await korisnici.insertOne(value);
};

Korisnik.edit = async (nameIn, nameOut) => {
    await korisnici.updateOne({ ime: nameIn }, { $set: { ime: nameOut } });
};

Korisnik.delete = async (nameIn) => {
    await korisnici.deleteOne({ ime: nameIn });
};

module.exports = Korisnik;
