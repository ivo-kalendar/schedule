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

module.exports = Options;
