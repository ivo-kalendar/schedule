const express = require('express');
const router = express.Router();
const vraboteniController = require('../controllers/vraboteniController');
const korisnikController = require('../controllers/korisnikController');
const userControler = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/vraboteni', vraboteniController.seeAll);
// router.post('/vraboteni', vraboteniController.addOne);
// router.put('/vraboteni', vraboteniController.editOne);
// router.delete('/vraboteni', vraboteniController.deleteOne);

router.get('/korisnik', auth, korisnikController.seeAll);
router.post('/korisnik', korisnikController.addOne);
router.post('/login', korisnikController.login);
// router.put('/korisnik', korisnikController.editOne);
// router.delete('/korisnik', korisnikController.deleteOne);

router.get('/user/:id', userControler.getUser);

module.exports = router;
