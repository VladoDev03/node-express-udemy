const express = require('express');
const bodyParses = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParses.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PSOT, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-HEADERS', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);
