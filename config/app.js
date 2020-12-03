const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 7788;

app.use(express.json({ extended: false }));
app.use('/api', require('../routes/router'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.use('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

app.listen(PORT, () =>
    console.log(`Server started on port ${PORT} and Connected to database.`)
);

module.exports = app;
