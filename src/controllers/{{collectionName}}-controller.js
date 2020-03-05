'use strict'

const mongoose = require('mongoose');
// const CollectionName = mongoose.model('CollectionName'); // M
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

exports.getBy = async (req, res, next) => {

    try {
        const by = { [req.body.by]: req.params.by } // a depender do by passado ele faz o find bay por aquele atributo
        const findOne = req.body.findOne; // se quiser pegar apenas um, retorna o objeto e nao array
        const filter = req.body.filter.split(' '); // filtro de retorno

        var data = await dao.getBy(by, findOne, filter);
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