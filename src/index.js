//Sistema basado en Express
const express = require('express');
const hbs = require('hbs');
const path = require('path');

//Archivos para la configuracion de modulos
const config = require('./config');
const db = require('./config/db-connection');
const app = require('./config/express');

//Settings
hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

//DB y Server
app.listen(config.PORT, () => {
    db()
})