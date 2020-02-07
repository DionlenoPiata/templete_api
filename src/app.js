'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conectar ao banco de dados
mongoose.connect('mongodb://localhost:27017/nodestore', { useNewUrlParser: true, useUnifiedTopology: true });

// carregar as Rotas
const indexRoute = require('./routes/index-route');

// #=>
const colectionNameRoute = require('./routes/{{colectionName}}-route');
// <=#

// middleware de conversao de dados
app.use(bodyParser.json()); // converte o que chega para json
app.use(bodyParser.urlencoded({ extended: false })); // codificar as urls


// usar a rota principal
app.use('/', indexRoute);

// rotas da aplicacao

// #=>
app.use('/colectionNameRoute' + 's', colectionNameRoute);
// <=#

module.exports = app;