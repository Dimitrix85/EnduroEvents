const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';
const express = require('express');

module.exports = (app) => {

    app.use(cors({
        exposedHeaders: 'Authorization'
    }));

    // app.use((req, res, next) => {
    //     console.log('-----------')
    //     console.log(req.headers)
    //     console.log('-----------')
    //     next()
    // })


    app.use(bodyParser.urlencoded({
        extended: true
    }));


    app.use(express.json())
    app.use(cookieParser(secret));
    app.use(express.urlencoded({
        extended: true
    }));

};