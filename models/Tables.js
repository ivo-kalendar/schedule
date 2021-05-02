const tables = require('../server').db().collection('tables');
const vraboteni = require('../server').db().collection('vraboteni');
const korisnici = require('../server').db().collection('korisnici');
const { ObjectId } = require('mongodb');

let Tables = function (data) {
    this.data = data;
    this.errors = [];
};

Tables.getOnlyTables = async () => {
    let options = { projection: { tableData: 0 } };
    return await tables.find({}, options).sort({ date: -1 }).toArray();
};

Tables.getAll = async () => {
    let tablesArr = [];
    let allTables = await tables
        .find({}, { projection: { tableData: 0 } })
        .sort({ date: -1 })
        .toArray();
    for (let i = 0; i < allTables.length; i++) {
        let name = await korisnici.findOne(
            { _id: ObjectId(allTables[i].author) },
            { projection: { _id: 0, name: 1, ime: 1, surname: 1 } }
        );

        let singleTable = { ...name, ...allTables[i] };
        tablesArr.push(singleTable);
    }

    return tablesArr;
};

Tables.getOneByID = async (id) => {
    const query = id ? { _id: ObjectId(id) } : {};
    let tableObj;
    let tableArr = [];

    await tables
        .find(query)
        .sort({ date: -1 })
        .limit(1)
        .forEach((e) => (tableObj = e));

    let author = await korisnici.findOne(
        { _id: ObjectId(tableObj.author) },
        { projection: { ime: 1, name: 1, surname: 1 } }
    );

    for (let i = 0; i < tableObj.tableData.length; i++) {
        let distributor = await vraboteni.findOne(
            { _id: ObjectId(tableObj.tableData[i]._id) },
            {
                projection: {
                    time: 1,
                    komercial: 1,
                    city: 1,
                    comment: 1,
                    ime: 1,
                },
            }
        );

        let obj = { ...tableObj.tableData[i], ...distributor };
        tableArr.push(obj);
    }
    tableArr.sort(function (a, b) {
        if (a.time < b.time) {
            return -1;
        }
    });

    tableObj = { ...author, ...tableObj, tableArr };
    return tableObj;
};

Tables.updateOne = async (req) => {
    let { distributorID, field, value } = req.body;
    let newTableData = [];
    let query = { _id: ObjectId(req.params.id) };
    let table = await tables.findOne(query);

    table.tableData.forEach((e) => {
        if (e._id.toString() === distributorID) {
            e[field] = value;
        }
        newTableData.push(e);
    });

    await tables.updateOne(query, {
        $set: { tableData: newTableData },
    });

    return req.params.id;
};

Tables.copyTable = async (req) => {
    let filter = { _id: ObjectId(req.body.tableID) };
    let options = { projection: { _id: 0, author: 0, date: 0 } };

    let table = await tables.findOne(filter, options);

    let newId;
    table.date = new Date();
    table.author = req.body.author;

    await tables.insertOne(table).then(async (result) => {
        newId = await tables.findOne({
            _id: ObjectId(result.insertedId),
        });
    });
    return newId;
};

Tables.add = async (req) => {
    let filter = { position: 'distributor', status: 'active' };
    const options = { projection: { _id: 1 } };

    let distributors = await vraboteni.find(filter, options).toArray();
    distributors.map((d) => {
        d.time = '';
        d.komercial = '';
        d.city = '';
        d.comment = '';
    });

    let newId;
    req.body.date = new Date();
    req.body.tableData = [...distributors];

    await tables.insertOne(req.body).then(async (result) => {
        newId = await tables.findOne({
            _id: ObjectId(result.insertedId),
        });
    });
    return newId;
};

Tables.delete = async (id) => {
    await tables.deleteOne({ _id: ObjectId(id) });
};

module.exports = Tables;
