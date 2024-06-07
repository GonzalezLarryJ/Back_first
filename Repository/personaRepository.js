const mongoose = require('mongoose');
const personaSchema = new mongoose.Schema({
    Id:{type:int, required:true},
    Nombre:{type:String, required:true},
    Apellido:{type:String, required:true},
    Telefono:{type:String, required:true},
    Email:{type:String, required:true},
    FechaCreacion:{type:Date, required:true},
    FechaActualizacion:{type:Date, required:true},
    Tipo_persona:{type:String, required:true}
});

const Persona = mongoose.Model('Persona',personaSchema);
module.exports = Persona;