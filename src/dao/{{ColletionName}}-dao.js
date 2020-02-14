'use strict'

const mongoose = require('mongoose');
const CollectionName = mongoose.model('CollectionName');

exports.get = (req) => {
    return CollectionName.find({}, req.body.filter);
}

exports.getBy = (req) => {

    // a depender do by passado ele faz o find bay por aquele atributo
    const by = { [req.body.by]: req.params.by }
    // se quiser pegar apenas um, retorna o objeto e nao array
    const findOne = req.body.findOne;

    if (findOne) {
        return CollectionName.findOne(by, req.body.filter);
    }

    return CollectionName.find(by, req.body.filter);
}