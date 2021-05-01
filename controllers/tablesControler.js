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

exports.updateTable = async (req, res) => {
    try {
        let table = await Tables.updateOne(req);

        res.status(200).json(table);
    } catch (error) {
        res.status(401).json({
            msg: 'Табелата не постои или нема информации за истата.',
        });
    }
};

exports.getAndCopyTable = async (req, res) => {
    try {
        let table = await Tables.copyTable(req);

        res.status(200).json(table);
    } catch (error) {
        res.status(401).json({
            msg: 'Табелата не постои или нема информации за истата.',
        });
    }
};

exports.deleteTable = async (req, res) => {
    try {
        await Tables.delete(req.params.id);

        res.status(200).json('Табелата е успешно избришана');
    } catch (error) {
        res.status(401).json({
            msg: 'Табелата неможе да се избрише.',
        });
    }
};

exports.addNewTable = async (req, res) => {
    try {
        let table = await Tables.add(req);

        res.status(200).json(table);
    } catch (err) {
        res.status(400).json({ msg: 'Неможе да се креира табела!' });
    }
};

exports.editOneTable = async (req, res) => {
    return null;
};
