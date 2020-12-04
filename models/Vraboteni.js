const vraboteni = require('../server').db().collection('vraboteni');

let Vraboteni = function (data) {
    this.data = data;
    this.errors = [];
};

Vraboteni.getAll = async () => {
    return await vraboteni.find().sort({ date: -1 }).toArray();
};

Vraboteni.add = async (body) => {
    body.date = new Date();
    body.pozicija = 'distributer';
    body.kategorija = '';
    body.grad = [];

    await vraboteni.insertOne(body);
};

Vraboteni.edit = async (nameIn, nameOut) => {
    await vraboteni.updateOne({ ime: nameIn }, { $set: { ime: nameOut } });
};

Vraboteni.delete = async (nameIn) => {
    await vraboteni.deleteOne({ ime: nameIn });
};

module.exports = Vraboteni;
