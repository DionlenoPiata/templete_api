'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    numero: Number,
    descricao: String,
    dataCadastro: { type: Date, default: Date.now },
    pessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pessoa"
    },
    produtos:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Produto"
            }
        ]

});

module.exports = mongoose.model('Pedido', schema);