'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/produto-controller'); // M

router.get('/', controller.get);
router.get('/:by', controller.getBy);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;