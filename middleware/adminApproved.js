const { ObjectId } = require('mongodb');
const korisnici = require('../server').db().collection('korisnici');

module.exports = async function (req, res, next) {
    const query = { _id: ObjectId(req.id) };
    const options = { projection: { password: 0, token: 0 } };
    let { adminApproved } = await korisnici.findOne(query, options);

    if (req.id && adminApproved) {
        next();
    } else {
        res.status(401).json({
            id: req.id,
            msg:
                'Немате пристап до оваа рута -- Контактирајте го Администраторот...',
        });
    }
};
