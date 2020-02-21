'use strict'

const dao = require('../dao/user-dao');
const md5 = require('md5');
const authenticate = require('../services/auth-service');
const config = require('../config');

exports.post = async (req, res, next) => {

    try {
        let data = req.body;
        data.password = md5(req.body.password + global.SALT_KEY);

        const userExist = await dao.getBy({ "email": req.body.email }, { "findOne": "true" });

        if (userExist) {
            res.status(200).send({ message: 'Já existe um usuário com esse email!' });
            return;
        }
        await dao.create({
            name: data.name,
            email: data.email,
            password: data.password,
            roles: ["user"]

        });

        res.status(201).send({ message: 'Cadastro realizado com sucesso!' });

    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar a requisição!' });
    }
}

exports.authenticate = async (req, res, next) => {

    try {

        const user = await dao.authenticate({ email: req.body.email, password: md5(req.body.password + global.SALT_KEY) });

        if (!user) {
            res.status(404).send({ message: 'Usuário ou senha inválidos!' });
            return;
        }

        const token = await authenticate.generateToken({
            id: user.id,
            email: user.email,
            name: user.name,
            roles: user.roles,
        });

        res.status(201).send({
            token: token, data: {
                email: user.email,
                name: user.name
            }
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar a requisição!' });
    }
}

exports.refreshToken = async (req, res, next) => {

    try {
        var token = req.body.token || req.query.token || req.headers[config.headersNameToken];
        const data = await authenticate.decodeToken(token);
        const user = await dao.getBy({ "_id": data.id }, { "findOne": true });

        if (!user) {
            res.status(404).send({ message: 'Usuário não encontrado!' });
            return;
        }

        const tokenData = await authenticate.generateToken({
            id: user.id,
            email: user.email,
            name: user.name,
            roles: user.roles,
        });

        res.status(201).send({
            token: tokenData,
            data: {
                email: user.email,
                name: user.name
            }
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar a requisição!' });
    }
}