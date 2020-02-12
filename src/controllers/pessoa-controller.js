'use strict'

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa'); // M

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
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
}

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
}