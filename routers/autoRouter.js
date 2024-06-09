const express = require('express');
const autoRouter = express.Router();
const autoController = require('../controllers/autoController');


autoRouter.use(express.json());

autoRouter.get('/',autoController.readAutos);
autoRouter.get('/:id', autoController.getAuto);
autoRouter.post('/',autoController.createAuto);
autoRouter.put('/:id',autoController.updateAuto); //agregar metodo
autoRouter.delete('/:id',autoController.deleteAuto);

module.exports = autoRouter