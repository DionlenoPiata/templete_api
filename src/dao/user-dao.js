'use strict'

const mongoose = require('mongoose');
const Document = mongoose.model('User');

exports.create = async (data) => {
    var document = new Document(data);
    await document.save();
}

exports.getBy = async (by, findOne, filter) => {

    var res;

    if (findOne) {
        res = await Document.findOne(by, filter);
        return res;
    }
    res = await Document.find(by, filter);
    return res;
}

exports.authenticate = async (data) => {
    const res = await Document.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}