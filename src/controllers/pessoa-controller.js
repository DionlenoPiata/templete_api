'use strict'

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa'); // M
const dao = require('../dao/pessoa-dao'); // M

exports.get = (req, res, next) => {

    const filter = req.body.filter;

    dao.get(filter)
        .then(data => {
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

    dao.update(req.params.id, req.body)
        .then(x => {
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
    dao.delete(req.params.id)
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