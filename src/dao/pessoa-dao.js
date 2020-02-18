'use strict'

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');


exports.get = async (filter) => {
    const res = await Pessoa.find({}, filter); // M
    return res;
}

exports.getBy = (by, findOne, filter) => {

    if (findOne) {
        return Pessoa.findOne(by, filter); // M
    }

    return Pessoa.find(by, filter); // M
}

exports.create = (data) => {
    var pessoa = new Pessoa(data); // M
    return pessoa.save(); // M
}

exports.update = (id, data) => {
    return Pessoa
        .findByIdAndUpdate(id, {
            $set: data
        });
}

exports.delete = (id) => {
    return Pessoa
        .findByIdAndDelete(id);
}