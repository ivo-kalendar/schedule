const Options = require('../models/Options');

exports.getHourOptions = async (req, res) => {
    try {
        let allHours = await Options.getAllHourOptions();

        res.status(200).json(allHours);
    } catch (err) {
        res.status(400).json({ msg: 'Неможеш да повлечеш податоци...' });
    }
};
