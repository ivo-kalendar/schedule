const express = require('express');
const router = express.Router();
const vraboteniController = require('../controllers/vraboteniController');
const korisnikController = require('../controllers/korisnikController');

router.get('/vraboteni', vraboteniController.seeAll);
router.post('/vraboteni', vraboteniController.addOne);
router.put('/vraboteni', vraboteniController.editOne);
router.delete('/vraboteni', vraboteniController.deleteOne);

router.get('/korisnik', korisnikController.seeAll);
router.post('/korisnik', korisnikController.addOne);
router.put('/korisnik', korisnikController.editOne);
router.delete('/korisnik', korisnikController.deleteOne);

module.exports = router;
