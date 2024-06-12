const express = require('express');
const autoRouter = express.Router();
const autoController = require('../controllers/autoController');


autoRouter.use(express.json());

autoRouter.get('/',autoController.readAutos); //obtener todos los autos
autoRouter.get('/:id', autoController.getAuto); //obtener auto por ID
autoRouter.post('/',autoController.createAuto); //crear auto por post method
autoRouter.put('/:id',autoController.updateAuto); //actualizar datos del auto por PUT
autoRouter.delete('/:id',autoController.deleteAuto); //eliminar auto

module.exports = autoRouter