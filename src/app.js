'use strict';

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// conectar ao banco de dados
mongoose.connect(config.conectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// CARREGA OS MODELS DE TESTE
/* -------------------------------------------------------------------*/
const Pessoa = require('./models/pessoa');
/* -------------------------------------------------------------------*/

// CARREGA OS MODELS
/* -------------------------------------------------------------------*/
const User = require('./models/user');
// #=> 
const CollectionName = require('./models/{{collectionName}}');
const CollectionNameRelational = require('./models/{{collectionNameRalational}}');
// <=#
/* -------------------------------------------------------------------*/

// ROUTERS ESTATICAS
/* -------------------------------------------------------------------*/
const indexRoute = require('./routes/index-route');
const userRoute = require('./routes/user-route');
/* -------------------------------------------------------------------*/

// ROUTERS DINAMICAS DAS COLECOES
/* -------------------------------------------------------------------*/
// #=>
const collectionNameRoute = require('./routes/{{collectionName}}-route');
const collectionNameRelationalRoute = require('./routes/{{collectionNameRalational}}-route');
// <=#
/* -------------------------------------------------------------------*/

// middleware de conversao de dados
app.use(express.json());

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// ROTA ESTATICAS DA APLICAÇÃO
/* -------------------------------------------------------------------*/
app.use('/', indexRoute);
app.use('/user' + 's', userRoute);
/* -------------------------------------------------------------------*/

// ROTAS DINAMICAS DA APLICAÇÃO
/* -------------------------------------------------------------------*/
// #=>
app.use('/collectionNameRoute' + 's', collectionNameRoute);
app.use('/collectionNameRelationalRoute' + 's', collectionNameRelationalRoute);
// <=#
/* -------------------------------------------------------------------*/

// ROTAS DE TESTE DA APLICAÇÃO
/* -------------------------------------------------------------------*/
const pessoaRoute = require('./routes/pessoa-route');
app.use('/pessoas', pessoaRoute);
/* -------------------------------------------------------------------*/

module.exports = app;
