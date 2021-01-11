const User = require('../models/User');

exports.getUser = async (req, res) => {
    try {
        let user = await User.getOneByID(req.params.id);

        res.json(user);
    } catch (error) {
        res.json(error);
    }
};
