const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/jwtSecret');

module.exports = function (req, res, next) {
    // Get token from the Header
    const token = req.header('x-auth-token');

    // Check if not Token
    if (!token) {
        return res.status(401).json({ msg: 'Нема Токен' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);

        req.id = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Невалиден Токен' });
    }
};
