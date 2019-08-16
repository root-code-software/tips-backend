const express = require('express');
// const morgan = require('morgan');

const app = express()

//Middlewares
// app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Routes
app.use('/', require('../routes'))


module.exports =  app