'use strict'

const mongoose = require('mongoose');
const CollectionName = mongoose.model('CollectionName'); // M

exports.post = (req, res, next) => {

    var collectionName = new CollectionName(req.body); // M
    collectionName
        .save()
        .then(x => {
            res.status(201).send({
                message: 'collectionName, cadastro com sucesso!' // M
            });
        }).catch(e => {
            res.status(400).send({
                message: 'collectionName, falha ao cadastrar!', // M
                data: e
            });
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};