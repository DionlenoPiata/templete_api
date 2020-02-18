'use strict'

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');


exports.get = async (filter) => {
    const res = await Pessoa.find({}, filter); // M
    return res;
}

exports.getBy = async (by, findOne, filter) => {

    var res;

    if (findOne) {
        res = await Pessoa.findOne(by, filter); // M
        return res;
    }
    res = await Pessoa.find(by, filter); // M
    return res;
}

exports.create = async (data) => {
    var pessoa = new Pessoa(data); // M
    await pessoa.save(); // M
}

exports.update = async (id, data) => {
    await Pessoa
        .findByIdAndUpdate(id, {
            $set: data
        });
}

exports.delete = async (id) => {
    await Pessoa
        .findByIdAndDelete(id);
}