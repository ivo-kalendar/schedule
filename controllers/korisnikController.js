const Korisnik = require('../models/Korisnik');

exports.seeAll = async (req, res) => {
    try {
        let all = await Korisnik.getAll();

        res.json(all);
    } catch (error) {
        console.log(error);
    }
};

// exports.addOne = async (req, res) => {
//     try {
//         await Korisnik.add(req.body);
//         res.json(req.body);
//     } catch (err) {
//         res.status(422).json(err.details[0]);
//     }
// };

exports.addOne = async (req, res) => {
    let korisnik = new Korisnik(req.body);
    korisnik
        .add()
        .then(() => {
            req.session.user = { username: user.data.ime, _id: user.data._id };
            req.session.save(() => {
                res.redirect('/');
            });
        })
        .catch((err) => {
            res.status(422).json(err);
        });
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
