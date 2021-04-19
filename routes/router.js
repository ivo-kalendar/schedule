const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { getUser } = require('../controllers/userController');
const {
    register,
    login,
    allUsers,
    editOne,
    deleteOne,
} = require('../controllers/korisnikController');
const {
    seeAll,
    editOneWorker,
    deleteOneWorker,
    addOneWorker,
} = require('../controllers/vraboteniController');

// Guest Routes
router.post('/register', register);
router.post('/login', login);

// Protected Routes -- Users //
router.get('/user/:id', auth, getUser);
router.get('/vraboteni', auth, seeAll);

// Protected Routes -- Admin // - // Korisnici //
router.get('/allusers', auth, admin, allUsers);
router.put('/korisnik/:id', auth, admin, editOne);
router.delete('/korisnik/:id', auth, admin, deleteOne);

// Protected Routes -- Admin // - // Vraboteni //
router.post('/vraboten/nov', auth, admin, addOneWorker);
router.put('/vraboten/:id', auth, admin, editOneWorker);
router.delete('/vraboten/:id', auth, admin, deleteOneWorker);

// router.post('/vraboteni', vraboteniController.addOne);
// router.put('/vraboteni', vraboteniController.editOne);
// router.delete('/vraboteni', vraboteniController.deleteOne);

// router.delete('/korisnik', korisnikController.deleteOne);

module.exports = router;
