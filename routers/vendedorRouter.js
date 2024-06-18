const express = require('express');
const vendedordorController = require('../controllers/vendedorController');

const routerVendedor = express.Router();
//autoRouter.use(express.json());

routerVendedor.get('/',vendedordorController.getVendedores);
routerVendedor.get('/:id',vendedordorController.getVendedor);
routerVendedor.post('/',vendedordorController.createVendedor);
routerVendedor.put('/:id',vendedordorController.editVendedor);
routerVendedor.delete('/:id',vendedordorController.deleteVendedor);

module.exports = routerVendedor;