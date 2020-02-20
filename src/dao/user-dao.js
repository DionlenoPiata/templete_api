'use strict'

const mongoose = require('mongoose');
const Document = mongoose.model('User');

exports.get = async (filter) => {
    const res = await Document.find({}, filter);
    return res;
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

exports.create = async (data) => {
    var document = new Document(data);
    await document.save();
}

exports.update = async (id, data) => {
    await Document
        .findByIdAndUpdate(id, {
            $set: data
        });
}

exports.delete = async (id) => {
    await Document
        .findByIdAndDelete(id);
}