'use strict'

const mongoose = require('mongoose');
const Object = mongoose.model('Produto'); // M

exports.get = async (filter, populate) => {

    var res;
    if (populate) {
        res = await Object
            .find({}, filter)
            .populate(populate.name, populate.atribute);
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
                .populate(populate.name, populate.atribute);
        } else {
            await Object.findOne(by, filter);
        }
        return res;
    }
    if (populate) {
        res = await Object
            .find(by, filter)
            .populate(populate.name, populate.atribute);
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