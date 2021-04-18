const User = require('../models/User');

exports.getUser = async (req, res) => {
    try {
        let user = await User.getOneByID(req.params.id);

        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ msg: 'Таков корисник не постои' });
    }
};
