const express = require('express');
const bodyParses = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParses.json());

app.use('/feed', feedRoutes);

app.listen(8080);
