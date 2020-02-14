'use strict'

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');


exports.get = (filter) => {
    return Pessoa.find({}, filter); // M
}

exports.getBy = (by, findOne, filter) => {

    if (findOne) {
        return Pessoa.findOne(by, filter); // M
    }

    return Pessoa.find(by, filter); // M
}