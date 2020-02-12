'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: String,
    cpf: String,
    dataCadastro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pessoa', schema);