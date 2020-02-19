'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    at1: {
        type: String
    },
    at2: {
        type: Number
    },
    at3: {
        type: [String]
    },
    at4: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CollectionName"
    },
    at5: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CollectionName"
    }]
});

module.exports = mongoose.model('CollectionNameRelational', schema); // M