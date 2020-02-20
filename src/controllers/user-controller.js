'use strict'

const mongoose = require('mongoose');
const CollectionName = mongoose.model('User');
const dao = require('../dao/user-dao');
const md5 = require('md5');

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
        const by = { [req.body.by]: req.params.by }
        const findOne = req.body.findOne;
        const filter = req.body.filter;

        var data = await dao.getBy(by, findOne, filter);
        res.status(200).send(data);

    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar a requisição!' });
    }
}

exports.post = async (req, res, next) => {

    try {
        let data = req.body; // M
        data.password = md5(req.body.password + global.SALT_KEY); // M
        await dao.create(data); // M
        res.status(201).send({ message: 'Cadastro realizado com sucesso!' });

    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar a requisição!' });
    }
}

exports.put = async (req, res, next) => {

    try {
        let data = req.body; // M
        data.password = md5(req.body.password + global.SALT_KEY); // M
        await dao.update(req.params.id, data) // M
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