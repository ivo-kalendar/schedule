const vraboteni = require('../server').db().collection('vraboteni');
const { ObjectId } = require('mongodb');

let Options = function (data) {
    this.data = data;
    this.errors = [];
};

Options.getAllHourOptions = async () => {
    return await vraboteni.findOne({
        _id: ObjectId('608ee633724d0e0decf2cac6'),
    });
};

Options.getAllCommentOptions = async () => {
    return await vraboteni.findOne({
        _id: ObjectId('60916f54f3dd29001517a507'),
    });
};

Options.getAllKomercialOptions = async () => {
    let { komercija } = await vraboteni.findOne({
        _id: ObjectId('60916fc2f3dd29001517a508'),
    });

    let { reon } = await vraboteni.findOne({
        _id: ObjectId('60916fe7f3dd29001517a509'),
    });

    komercija = [...reon, ...komercija];
    return komercija;
};

module.exports = Options;
