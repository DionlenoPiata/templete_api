'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "{{title of aplication}}",
        version: "version of aplication"
    });
});

module.exports = router;