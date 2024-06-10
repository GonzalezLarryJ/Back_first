const mongoose = require('mongoose');

const compradorSchema = new mongoose.Schema({
    idauto:{type:Number, required:true},
    idpersona:{type:Number, required:true},
    consulta:{type:String,required:false},
    fechaCreacion:{type:Date, required:true},
    fechaActualizacion:{type:Date, required:true}
});

module.exports = mongoose.model('Comprador',compradorSchema);
