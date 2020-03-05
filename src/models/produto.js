'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: String,
    descricao: String,
    dataCadastro: { type: Date, default: Date.now },
    marca: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Marca"
    }
});

module.exports = mongoose.model('Produto', schema);