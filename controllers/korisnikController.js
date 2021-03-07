const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/jwtSecret');
const Korisnik = require('../models/Korisnik');

// exports.allUsers = async (req, res) => {
//     try {
//         let siteKorisnici;
//         if (req.id) {
//             siteKorisnici = await Korisnik.getAll();
//         }

//         res.json(siteKorisnici);
//     } catch (error) {
//         res.json(error);
//     }
// };

exports.clientRoutes = async (req, res) => {
    try {
        let admin = req.id === '601d1b63d4e3e204d0e67ade';

        let routes = [
            { link: '/home', content: 'Дома', name: 'Home' },
            { link: '/about', content: 'За Нас', name: 'About' },
            { link: '/logout', content: 'Одјави Се', name: 'Logout' },
        ];

        let adminRoutes = {
            link: '/user-profile',
            content: 'Профил',
            name: 'UserProfile',
        };

        if (req.id && admin) {
            routes.splice(1, 0, adminRoutes);
        }

        res.json(routes);
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

            jwt.sign(payload, jwtSecret, { expiresIn: 36000 }, (err, token) => {
                if (err) throw err;
                res.status(200).json({ token, id: payload.id });
            });
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
                    { expiresIn: 36000 },
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

// exports.editOne = async (req, res) => {
//     try {
//         await Korisnik.edit(req.body.nameIn, req.body.nameOut);
//         res.json(req.body);
//     } catch (error) {
//         console.log(error);
//     }
// };

// exports.deleteOne = async (req, res) => {
//     try {
//         await Korisnik.delete(req.body.name);
//         res.json(req.body.name);
//     } catch (error) {
//         console.log(error);
//     }
// };
