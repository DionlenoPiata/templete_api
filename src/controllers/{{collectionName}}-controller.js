'use strict'

const mongoose = require('mongoose');
const CollectionName = mongoose.model('CollectionName'); // M

exports.get = (req, res, next) => {
    CollectionName.find({}, req.body.filter)
        .then(data => { // M
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.getBy = (req, res, next) => {

    // a depender do by passado ele faz o find bay por aquele atributo
    const by = { [req.body.by]: req.params.by }

    // se quiser pegar apenas um, retorna o objeto e nao array
    const findOne = req.body.findOne;

    if (findOne) {
        CollectionName.findOne(by, req.body.filter)
            .then(data => { // M
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).send(e);
            });

    } else {
        CollectionName.find(by, req.body.filter)
            .then(data => { // M
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).send(e);
            });
    }
}

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
    CollectionName
        .findByIdAndUpdate(req.params.id, {
            $set: req.body
        }).then(x => {
            res.status(200).send({
                message: 'CollectionName: atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'CollectionName: Falha ao atuallizar!',
                data: e
            });
        });
};

exports.delete = (req, res, next) => {
    CollectionName
        .findOneAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'CollectionName: removido com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'PesCollectionNamesoa: Falha ao remover!',
                data: e
            });
        });
};