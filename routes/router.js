const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const vraboteniController = require('../controllers/vraboteniController');
const korisnikController = require('../controllers/korisnikController');
const userControler = require('../controllers/userController');

router.get('/vraboteni', auth, vraboteniController.seeAll);
// router.post('/vraboteni', vraboteniController.addOne);
// router.put('/vraboteni', vraboteniController.editOne);
// router.delete('/vraboteni', vraboteniController.deleteOne);

router.post('/korisnik', korisnikController.addOne);
router.post('/login', korisnikController.login);
router.get('/sitekorisnici', auth, korisnikController.seeAll);
// router.put('/korisnik', korisnikController.editOne);
// router.delete('/korisnik', korisnikController.deleteOne);

router.get('/user/:id', userControler.getUser);

module.exports = router;
