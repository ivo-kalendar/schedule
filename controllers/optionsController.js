const Options = require('../models/Options');

exports.getHourOptions = async (req, res) => {
    try {
        let allHours = await Options.getAllHourOptions();

        res.status(200).json(allHours);
    } catch (err) {
        res.status(400).json({ msg: 'Неможеш да повлечеш податоци...' });
    }
};

exports.getCommentOptions = async (req, res) => {
    try {
        let allComments = await Options.getAllCommentOptions();

        res.status(200).json(allComments);
    } catch (err) {
        res.status(400).json({ msg: 'Неможеш да повлечеш податоци...' });
    }
};

exports.getKomercialOptions = async (req, res) => {
    try {
        let allKomercial = await Options.getAllKomercialOptions();

        res.status(200).json(allKomercial);
    } catch (err) {
        res.status(400).json({ msg: 'Неможеш да повлечеш податоци...' });
    }
};
