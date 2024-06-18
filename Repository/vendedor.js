const mongoose = require('mongoose');

const vendedorSchema = new mongoose.Schema({
    idauto:{type:Number, required:true},
    fechaCreacion:{type:Date, required:true},
    fechaActualizacion:{type:Date, required:true},
    consesionaria:{type:Boolean, require:true},
    idpersona:{type:Number, required:true},
});

module.exports = mongoose.model('Vendedor',vendedorSchema);