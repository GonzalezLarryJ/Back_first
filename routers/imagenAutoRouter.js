const express = require('express');
const imagenAutoRouter = express.Router();
const imagenAutoController = require('../controllers/imagenAutoController');


imagenAutoRouter.use(express.json());

imagenAutoRouter.get('/',imagenAutoController.readImagenesAuto);
imagenAutoRouter.get('/:id',imagenAutoController.getImagenAuto);
imagenAutoRouter.post('/',imagenAutoController.createImagenAuto);
imagenAutoRouter.put('/:id',imagenAutoController.updateImagenAuto); 
imagenAutoRouter.delete('/:id',imagenAutoController.deleteImagenAuto); 

module.exports = imagenAutoRouter;
