const express = require('express');
const bodyParses = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParses.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

mongoose.connect(
    'mongodb+srv://vladsto101:Salamur12@course.rgce3bw.mongodb.net/messages?retryWrites=true&w=majority'
)
    .then(result => {
        app.listen(8080);
    })
    .catch(err => console.log(err));
