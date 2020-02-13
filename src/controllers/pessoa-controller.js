'use strict'

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa'); // M

exports.get = (req, res, next) => {

    Pessoa.find({}, req.body.filter)
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
        Pessoa.findOne(by, req.body.filter)
            .then(data => { // M
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).send(e);
            });

    } else {
        Pessoa.find(by, req.body.filter)
            .then(data => { // M
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).send(e);
            });
    }
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
    res.status(200).send(req.body);
}