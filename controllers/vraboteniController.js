const Vraboteni = require('../models/Vraboteni');

exports.seeAll = async (req, res) => {
    try {
        let all = await Vraboteni.getAll();

        res.json(all);
    } catch (error) {
        console.log(error);
    }
};

exports.addOneWorker = async (req, res) => {
    try {
        let vraboten = await Vraboteni.add(req);
        res.status(200).json(vraboten);
    } catch (err) {
        res.status(400).json({ msg: 'Неможе да се креира нов вработен!' });
    }
};

exports.editOneWorker = async (req, res) => {
    try {
        await Vraboteni.edit(req);
        res.status(200).json('Успешно променет вработен.');
    } catch (err) {
        res.status(400).json({ msg: 'Таков вработен не постои!' });
    }
};

exports.deleteOneWorker = async (req, res) => {
    try {
        await Vraboteni.delete(req.params.id);
        res.status(200).json('Успешно избришан вработен.');
    } catch (err) {
        res.status(400).json({ msg: 'Таков вработен не постои!' });
    }
};
