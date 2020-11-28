const express = require('express');
const router = express.Router();
const TestData4 = require('../server').db().collection('TestData4');
const vraboteni = require('../server').db().collection('vraboteni');

router.get('/', async (req, res) => {
    await TestData4.find({}).toArray((err, data) => {
        res.json(data);
    });
});

router.post('/', async (req, res) => {
    await vraboteni.insertOne(req.body);
    res.json({ insertedOne: true });
});

module.exports = router;
