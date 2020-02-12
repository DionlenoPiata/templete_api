'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conectar ao banco de dados
mongoose.connect('mongodb://localhost:27017/nodestore', { useNewUrlParser: true, useUnifiedTopology: true });


// CARREGA OS MODELS DE TESTE
/* -------------------------------------------------------------------*/
const Pessoa = require('./models/pessoa');
/* -------------------------------------------------------------------*/

// CARREGA OS MODELS
/* -------------------------------------------------------------------*/
// #=> 
const CollectionName = require('./models/{{collectionName}}');
// <=#
/* -------------------------------------------------------------------*/

// ROUTER ROTA HOME
/* -------------------------------------------------------------------*/
const indexRoute = require('./routes/index-route');
/* -------------------------------------------------------------------*/

// ROUTER QUE RESPONDE PELA COLECAO
/* -------------------------------------------------------------------*/
// #=>
const collectionNameRoute = require('./routes/{{collectionName}}-route');
// <=#
/* -------------------------------------------------------------------*/

// middleware de conversao de dados
/* -------------------------------------------------------------------*/
app.use(bodyParser.json()); // converte o que chega para json
app.use(bodyParser.urlencoded({ extended: false })); // codificar as urls
/* -------------------------------------------------------------------*/

// ROTA HOME DA APLICAÇÃO
/* -------------------------------------------------------------------*/
app.use('/', indexRoute);
/* -------------------------------------------------------------------*/

// ROTAS DINAMICAS DA APLICAÇÃO
/* -------------------------------------------------------------------*/
// #=>
app.use('/collectionNameRoute' + 's', collectionNameRoute);
// <=#
/* -------------------------------------------------------------------*/

// ROTAS DE TESTE DA APLICAÇÃO
/* -------------------------------------------------------------------*/
const pessoaRoute = require('./routes/pessoa-route');
app.use('/pessoas', pessoaRoute);
/* -------------------------------------------------------------------*/

module.exports = app;