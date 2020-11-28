const express = require('express');
const app = express();

app.use(express.json({ extended: false }));
app.use(express.json());
app.use('/', require('../routes/router'));

module.exports = app;
