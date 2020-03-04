'use strict'

const mongoose = require('mongoose');
// const CollectionName = mongoose.model('CollectionName'); // M
const dao = require('../dao/{{collectionNameRelational}}-dao'); // M

exports.get = async (req, res, next) => {

    try {
        const filter = req.body.filter;
        const populate = req.body.populate;

        var data = await dao.get(filter, populate);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar a requisição!' });
    }
}

exports.getBy = async (req, res, next) => {

    try {
        const by = { [req.body.by]: req.params.by }
        const findOne = req.body.findOne;
        const filter = req.body.filter;
        const populate = req.body.populate;

        var data = await dao.getBy(by, findOne, filter, populate);
        res.status(200).send(data);

    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar a requisição!' });
    }
}

exports.post = async (req, res, next) => {

    try {
        await dao.create(req.body);
        res.status(201).send({ message: 'Cadastro realizado com sucesso!' });

    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar a requisição!' });
    }
}

exports.put = async (req, res, next) => {

    try {
        await dao.update(req.params.id, req.body)
        res.status(200).send({ message: 'Atualizado com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar a requisição!' });
    }
}

exports.delete = async (req, res, next) => {

    try {
        await dao.delete(req.params.id)
        res.status(200).send({ message: 'Removido com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar a requisição!' });
    }
}