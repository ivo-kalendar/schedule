const vraboteni = require('../server').db().collection('vraboteni');
const { ObjectId } = require('mongodb');

let Vraboteni = function (data) {
    this.data = data;
    this.errors = [];
};

Vraboteni.getAll = async () => {
    return await vraboteni
        .find()
        .sort({ poslednaPromena: -1, date: -1 })
        .toArray();
};

Vraboteni.add = async (req) => {
    let newId;
    req.body.date = new Date();
    await vraboteni.insertOne(req.body).then(async (result) => {
        newId = await vraboteni.findOne({
            _id: ObjectId(result.insertedId),
        });
    });
    return newId;
};

Vraboteni.edit = async (req) => {
    let filter = { _id: ObjectId(req.params.id) };
    let exists = await vraboteni.findOne(filter);

    if (exists) {
        req.body.date = new Date(req.body.date);
        req.body.poslednaPromena = new Date();

        await vraboteni.replaceOne(filter, req.body);
    }
};

Vraboteni.delete = async (id) => {
    await vraboteni.deleteOne({ _id: ObjectId(id) });
};

module.exports = Vraboteni;
