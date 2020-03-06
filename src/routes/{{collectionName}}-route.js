'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/{{collectionNameRelational}}-controller'); // M
const authService = require('../services/auth-service');

router.get('/', authService.isAdmin, controller.get);
router.get('/:by', authService.authorize, controller.getBy);
router.post('/', authService.authorize, controller.post);
router.put('/:id', authService.authorize, controller.put);
router.delete('/:id', authService.authorize, controller.delete);

module.exports = router;