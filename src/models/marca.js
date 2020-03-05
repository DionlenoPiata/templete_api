'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: String,
    descricao: String,
});

module.exports = mongoose.model('Marca', schema);