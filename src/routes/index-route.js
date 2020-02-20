'use strict';

const express = require('express');
const router = express.Router();

const config = require('../config');

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: config.titleApplication,
        version: config.version_application
    });
});

module.exports = router;