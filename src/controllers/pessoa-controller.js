'use strict'

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa'); // M
const dao = require('../dao/pessoa-dao'); // M

exports.get = (req, res, next) => {

    dao.get(req)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.getBy = (req, res, next) => {

    dao.getBy(req)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.post = (req, res, next) => {

    var pessoa = new Pessoa(req.body); // M
    pessoa
        .save()
        .then(x => {
            res.status(201).send({
                message: 'pessoa, cadastro com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'pessoa, falha ao cadastrar!',
                data: e
            });
        });

}

exports.put = (req, res, next) => {
    Pessoa
        .findByIdAndUpdate(req.params.id, {
            $set: req.body
        }).then(x => {
            res.status(200).send({
                message: 'Pessoa: atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Pessoa: Falha ao atuallizar!',
                data: e
            });
        });
}

exports.delete = (req, res, next) => {
    Pessoa
        .findByIdAndDelete(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Pessoa: removido com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Pessoa: Falha ao remover!',
                data: e
            });
        });
}