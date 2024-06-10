const express = require('express');
const personaConroller = require('../controllers/personaController');
const routerPersona = express.Router();

routerPersona.get('/', personaConroller.getPersonas);
routerPersona.get('/:id',personaConroller.getPersona);
routerPersona.post('/',personaConroller.createPersona);
routerPersona.put('/:id',personaConroller.editPersona);
routerPersona.delete('/:id',personaConroller.deletePersona);

module.exports = routerPersona;