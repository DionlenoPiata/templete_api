'use strict'

const mongoose = require('mongoose');
const Object = mongoose.model('CollectionNameRelational');

exports.get = async (filter) => {
    const res = await Object.find({}, filter);
    return res;
}

exports.getBy = async (by, findOne, filter) => {

    var res;

    if (findOne) {
        res = await Object.findOne(by, filter);
        return res;
    }
    res = await Object.find(by, filter);
    return res;
}

exports.create = async (data) => {
    var object = new Object(data);
    await object.save();
}

exports.update = async (id, data) => {
    await Object
        .findByIdAndUpdate(id, {
            $set: data
        });
}

exports.delete = async (id) => {
    await Object
        .findByIdAndDelete(id);
}