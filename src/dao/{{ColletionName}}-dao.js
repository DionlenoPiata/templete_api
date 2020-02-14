'use strict'

const mongoose = require('mongoose');
const CollectionName = mongoose.model('CollectionName');

exports.get = (filter) => {
    return CollectionName.find({}, filter); // M
}

exports.getBy = (by, findOne, filter) => {

    if (findOne) {
        return CollectionName.findOne(by, filter); // M
    }

    return CollectionName.find(by, filter); // M
}

exports.create = (data) => {
    var collectionName = new CollectionName(data); // M
    return collectionName.save(); // M
}