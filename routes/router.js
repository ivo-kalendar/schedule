const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { seeAll } = require('../controllers/vraboteniController');
const {
    register,
    login,
    allUsers,
} = require('../controllers/korisnikController');
const { getUser } = require('../controllers/userController');

// Guest Routes
router.post('/register', register);
router.post('/login', login);

// Protected Routes
router.get('/allusers', auth, allUsers);
router.get('/user/:id', auth, getUser);
router.get('/vraboteni', auth, seeAll);

// router.post('/vraboteni', vraboteniController.addOne);
// router.put('/vraboteni', vraboteniController.editOne);
// router.delete('/vraboteni', vraboteniController.deleteOne);

// router.put('/korisnik', korisnikController.editOne);
// router.delete('/korisnik', korisnikController.deleteOne);

module.exports = router;
