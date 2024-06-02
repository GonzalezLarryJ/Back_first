const mongoose = require('mongoose');
const compradorExchema = new mongoose.Schema({
    id:{type:int, required:true},
    id_auto:{type:int, required:true},
    id_persona:{type:int, required:true},
    consulta:{type:String,required:false},
    fechaCreacion:{type:Date, required:true},
    fechaActualizacion:{type:Date, required:true}
});

const Comprador=mongoose.Model('Comprador',compradorExchema);
module.exports = Comprador;