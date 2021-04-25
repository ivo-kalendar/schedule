const Tables = require('../models/Tables');

exports.getAllTables = async (req, res) => {
    try {
        let allTables = await Tables.getAll();

        res.status(200).json(allTables);
    } catch (err) {
        res.status(400).json({ msg: 'Неможеш да повлечеш податоци...' });
    }
};

exports.getOneTable = async (req, res) => {
    try {
        let table = await Tables.getOneByID(
            req.params.id !== 'undefined' ? req.params.id : null
        );

        res.status(200).json(table);
    } catch (error) {
        res.status(401).json({
            msg: 'Табелата не постои или нема информации за истата.',
        });
    }
};

exports.getEditTable = async (req, res) => {
    try {
        let table = await Tables.getOnlyTableByID(req.params.id);

        res.status(200).json(table);
    } catch (error) {
        res.status(401).json({
            msg: 'Табелата не постои или нема информации за истата.',
        });
    }
};

exports.addNewTable = async (req, res) => {
    try {
        let table = await Tables.add(req);
        res.status(200).json(table);

        // console.log(table);
    } catch (err) {
        res.status(400).json({ msg: 'Неможе да се креира табела!' });
    }
};

exports.editOneTable = async (req, res) => {
    return null;
};
