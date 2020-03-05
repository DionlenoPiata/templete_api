'use strict'

const mongoose = require('mongoose');
const Document = mongoose.model('Pessoa'); // M

exports.get = async (filter, populate) => {

    var res;
    if (populate) {
        res = await Object
            .find({}, filter)
            .populate(populate);
        return res;
    }
    res = await Object.find({}, filter);
    return res;
}

exports.getBy = async (by, findOne, filter, populate) => {

    var res;

    if (findOne) {
        if (populate) {
            res = await Object
                .findOne(by, filter)
                .populate(populate);
        } else {
            await Object.findOne(by, filter);
        }
        return res;
    }
    if (populate) {
        res = await Object
            .find(by, filter)
            .populate(populate);
        return res;
    }

    res = await Object.find(by, filter);
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