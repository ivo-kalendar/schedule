const express = require('express');
const router = express.Router();
const vraboteniController = require('../controllers/vraboteniController');

router.get('/', vraboteniController.seeAll);
router.post('/', vraboteniController.addOne);
router.put('/', vraboteniController.editOne);
router.delete('/', vraboteniController.deleteOne);

module.exports = router;
