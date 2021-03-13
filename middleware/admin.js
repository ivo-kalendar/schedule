module.exports = function (req, res, next) {
    if (req.id === '601d1b63d4e3e204d0e67ade') {
        next();
    } else {
        res.json([
            {
                _id: 'user',
                ime:
                    'Немате пристап до оваа рута -- Контактирајте го Администраторот...',
            },
        ]);
    }
};
