const Korisnik = require('../models/Korisnik');

exports.seeAll = async (req, res) => {
    try {
        let all = await Korisnik.getAll();

        res.json(all);
    } catch (error) {
        console.log(error);
    }
};

exports.addOne = async (req, res) => {
    try {
        await Korisnik.add(req.body);
        res.json(req.body);
    } catch (err) {
        res.status(400).json(err.details[0]);
    }
};

exports.editOne = async (req, res) => {
    try {
        await Korisnik.edit(req.body.nameIn, req.body.nameOut);
        res.json(req.body);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteOne = async (req, res) => {
    try {
        await Korisnik.delete(req.body.name);
        res.json(req.body.name);
    } catch (error) {
        console.log(error);
    }
};
