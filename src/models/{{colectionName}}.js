'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    // aqui vai uma lista de atributos
    nameAttribute: {
        //type: Number, String, Boolean, Array, Date, Buffer, ObjectId, Mixed
        //required: true || false -> se eh obrigado receber
        //trim: retorna o texto sem os espaços em branco no início e fim do texto
        //index:
        //unique:
        //default: setar o valor default para o atributo
    }
});

module.exports = mongoose.model('ColectionName', schema);