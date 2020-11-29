const Vraboteni = require('../models/Vraboteni');

exports.seeAll = async (req, res) => {
    try {
        let all = await Vraboteni.getAll();
        res.json(all);
    } catch (error) {
        console.log(error);
    }
};

exports.addOne = async (req, res) => {
    try {
        await Vraboteni.addNew(req.body);
        res.json(req.body);
    } catch (error) {
        console.log(error);
    }
};

exports.editOne = async (req, res) => {
    try {
        await Vraboteni.editNew(req.body.nameIn, req.body.nameOut);
        res.json(req.body);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteOne = async (req, res) => {
    try {
        await Vraboteni.deleteNew(req.body.name);
        res.json(req.body.name);
    } catch (error) {
        console.log(error);
    }
};
