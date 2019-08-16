const express = require('express');
// const morgan = require('morgan');
const cors = require('cors');

const app = express()

//Middlewares
// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin: function (_origin, callback) {
        callback(null, true)

    },
    // origin: (origin, next) => {
    //     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
    //         next(null, true);
    //     } else {
    //         const msg = 'The CORS policy for this site does not allow access from the specified Origin: ';
    //         next(new Error(msg, origin));
    //     }
    // },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'X-Access-Token'],
    preflightContinue: false
}));

// Routes
app.use('/', require('../routes'))


module.exports = app