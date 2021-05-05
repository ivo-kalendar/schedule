const vraboteni = require('../server').db().collection('vraboteni');
const tables = require('../server').db().collection('tables');
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

Options.getDifferenceDrivers = async (id) => {
    let tableDrivers = [];
    let active = [];
    let inactive = [];

    let editTable = await tables.findOne({ _id: ObjectId(id) });
    editTable.tableData.forEach((d) => tableDrivers.push(d._id.toString()));

    let actfilter = { position: 'distributor', status: 'active' };
    let infilter = { position: 'distributor', status: { $ne: 'active' } };
    const options = { projection: { _id: 1 } };

    let allActiveDrivers = await vraboteni.find(actfilter, options).toArray();
    allActiveDrivers.forEach((d) => {
        if (!tableDrivers.includes(d._id.toString())) {
            active.push(d._id.toString());
        }
    });

    let allInactiveDrivers = await vraboteni.find(infilter, options).toArray();
    allInactiveDrivers.forEach((d) => {
        if (tableDrivers.includes(d._id.toString())) {
            inactive.push(d._id.toString());
        }
    });

    return { active, inactive };
};

module.exports = Options;
