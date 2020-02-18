'use strict'

const mongoose = require('mongoose');
const CollectionName = mongoose.model('CollectionName');

exports.get = async (filter) => {
    const res = await CollectionName.find({}, filter); // M
    return res;
}

exports.getBy = async (by, findOne, filter) => {

    var res;

    if (findOne) {
        res = await CollectionName.findOne(by, filter); // M
        return res;
    }
    res = await CollectionName.find(by, filter); // M
    return res;
}

exports.create = async (data) => {
    var collectionName = new CollectionName(data); // M
    await collectionName.save(); // M
}

exports.update = async (id, data) => {
    await CollectionName
        .findByIdAndUpdate(id, {
            $set: data
        });
}

exports.delete = async (id) => {
    await CollectionName
        .findByIdAndDelete(id);
}