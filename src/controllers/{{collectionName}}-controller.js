'use strict'

const mongoose = require('mongoose');
const CollectionName = mongoose.model('CollectionName'); // M
const dao = require('../dao/{{ColletionName}}-dao'); // M

exports.get = async (req, res, next) => {

    try {
        const filter = req.body.filter;
        var data = await dao.get(filter);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar a requisição!' });
    }
}

exports.getBy = (req, res, next) => {

    // a depender do by passado ele faz o find bay por aquele atributo
    const by = { [req.body.by]: req.params.by }
    // se quiser pegar apenas um, retorna o objeto e nao array
    const findOne = req.body.findOne;
    // filtro de retorno
    const filter = req.body.filter;

    dao.getBy(by, findOne, filter)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.post = (req, res, next) => {

    dao
        .create(req.body)
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

    dao.update(req.params.id, req.body)
        .then(x => {
            res.status(200).send({
                message: 'collectionName: atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'collectionName: Falha ao atuallizar!',
                data: e
            });
        });
};

exports.delete = (req, res, next) => {

    dao.delete(req.params.id)
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