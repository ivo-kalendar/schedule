const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const adminApproved = require('../middleware/adminApproved');
const { getUser, getUserName } = require('../controllers/userController');
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
const {
    getAllTables,
    getOneTable,
    getEditTable,
    addNewTable,
    editOneTable,
    deleteTable,
    getAndCopyTable,
} = require('../controllers/tablesControler');

// Guest Routes
router.post('/register', register);
router.post('/login', login);

// Protected Routes -- Users //
router.get('/user/:id', auth, getUser);
router.get('/vraboteni', auth, seeAll);

// Protected Routes -- Users // - // Tables //
router.post('/table/new', auth, adminApproved, addNewTable);
router.get('/tables', auth, adminApproved, getAllTables);
router.get('/tableauthor/:id', auth, adminApproved, getUserName);
router.get('/table/:id', auth, adminApproved, getOneTable);
router.get('/edittable/:id', auth, adminApproved, getEditTable);
router.post('/copytable/new', auth, adminApproved, getAndCopyTable);

router.put('/table/:id', auth, adminApproved, editOneTable);

// Protected Routes -- Admin // - // Korisnici //
router.get('/allusers', auth, admin, allUsers);
router.put('/korisnik/:id', auth, admin, editOne);
router.delete('/korisnik/:id', auth, admin, deleteOne);
router.delete('/deletetable/:id', auth, admin, deleteTable);

// Protected Routes -- Admin // - // Vraboteni //
router.post('/vraboten/nov', auth, admin, addOneWorker);
router.put('/vraboten/:id', auth, admin, editOneWorker);
router.delete('/vraboten/:id', auth, admin, deleteOneWorker);

module.exports = router;
