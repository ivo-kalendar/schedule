const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const adminApproved = require('../middleware/adminApproved');
const { getUser, getUserName } = require('../controllers/userController');
const {
    getHourOptions,
    getCommentOptions,
    getKomercialOptions,
    getDriverOptions,
} = require('../controllers/optionsController');
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
    getAllTablesData,
    getOneTable,
    updateTable,
    addNewTable,
    editOneTable,
    deleteTable,
    getAndCopyTable,
    removeDrivers,
    addDrivers,
    removeAllComments,
    addTableComment,
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
router.get('/tables/users', auth, adminApproved, getAllTablesData);
router.get('/tableauthor/:id', auth, adminApproved, getUserName);
router.get('/table/:id', auth, adminApproved, getOneTable);
router.post('/copytable/new', auth, adminApproved, getAndCopyTable);
router.put('/updatetable/:id', auth, adminApproved, updateTable);
router.put('/table/:id', auth, adminApproved, editOneTable);
router.put('/table/removedrivers/:id', auth, adminApproved, removeDrivers);
router.put('/table/adddrivers/:id', auth, adminApproved, addDrivers);
router.put('/table/removecomments/:id', auth, adminApproved, removeAllComments);
router.put('/table-comment/:id', auth, adminApproved, addTableComment);

// Protected Routes -- Users // - // Options //
router.get('/options/hour', auth, adminApproved, getHourOptions);
router.get('/options/comment', auth, adminApproved, getCommentOptions);
router.get('/options/komercial', auth, adminApproved, getKomercialOptions);
router.get('/options/drivers/:id', auth, adminApproved, getDriverOptions);

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
