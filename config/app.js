const express = require('express');
const app = express();
const PORT = process.env.PORT || 7788;

app.use(express.json({ extended: false }));
app.use(express.json());
app.use('/', require('../routes/router'));

app.listen(PORT, () =>
    console.log(`Server started on port ${PORT} and Connected to database.`)
);

module.exports = app;
