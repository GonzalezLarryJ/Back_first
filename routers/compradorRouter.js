const express = require('express');
const compradorController = require('../controllers/compradorController');
const routerComprador = express.Router();

routerComprador.get('/',compradorController.getCompradores);
routerComprador.get('/:id',compradorController.getComprador);
routerComprador.post('/',compradorController.createComprador);

module.exports = routerComprador;