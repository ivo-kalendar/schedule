const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/jwtSecret');
const Korisnik = require('../models/Korisnik');

exports.allUsers = async (req, res) => {
    try {
        let siteKorisnici;
        if (req.id) {
            siteKorisnici = await Korisnik.getAll();
        }

        res.json(siteKorisnici);
    } catch (error) {
        res.json(error);
    }
};

exports.register = async (req, res) => {
    let korisnik = await new Korisnik(req.body);
    korisnik
        .registerUser()
        .then(() => {
            const payload = { id: korisnik.data._id };

            jwt.sign(
                payload,
                jwtSecret,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({ token, id: payload.id });
                }
            );
        })
        .catch((err) => res.status(422).json(err));
};

exports.login = async (req, res) => {
    let korisnik = await new Korisnik(req.body);
    korisnik
        .authenticate()
        .then(() => {
            const payload = { id: korisnik.data._id };

            if (payload.id) {
                jwt.sign(
                    payload,
                    jwtSecret,
                    { expiresIn: 360000 },
                    (err, token) => {
                        if (err) throw err;
                        res.status(200).json({ token, id: payload.id });
                    }
                );
            } else {
                res.status(422).json(korisnik.errors[0]);
            }
        })
        .catch((err) => {
            res.status(422).json(err);
        });
};

exports.editOne = async (req, res) => {
    try {
        await Korisnik.edit(req);
        res.status(200).json('Успешно променет корисник.');
    } catch (err) {
        res.status(400).json({ msg: 'Тоа корисничко име не постои!' });
    }
};

exports.deleteOne = async (req, res) => {
    try {
        await Korisnik.delete(req.params.id);
        res.status(200).json('Успешно избришан корисник.');
    } catch (err) {
        res.status(400).json({ msg: 'Тоа корисничко име не постои!' });
    }
};
