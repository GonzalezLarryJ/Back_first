const Persona = require('./persona');
//const conectarDB = require('../db/db');

//conectarDB();

exports.getPersonas = async () =>{
    try {
        let personas = await Persona.find();
        //console.log(personas);
        return personas
    } catch (error) {
        console.log(error);
    }
}

exports.getPersona = async (id)=>{
    try {
        let persona = await Persona.findById(id);
        return persona;
    } catch (error) {
        console.log(error);
    }
}

exports.createPersona = async(persona)=>{
    try {
        let newPersona = new Persona(persona);
        await newPersona.save();
        return newPersona;
    } catch (error) {
        console.log(error);
    }
}

exports.editPersona = async(id,personaData)=>{
    try {
        if (!id) {
            console.log("No encontramos el id del registro a editar");
            return "no se encontró el Id del registro a editar";
            }
        let personaB = await Persona.findById({_id:id})
        if (!personaB) {
            console.log("No existe el registro");
            return "no se encontró el registro";
        }
        const updatePersona = await Persona.findOneAndReplace({_id:id},personaData)
        return updatePersona;
    } catch (error) {
        console.log(error);
    }
}

exports.deletePersona = async(id)=>{
    try {
        if (!id) {
            console.log("No consigo este Id, revisa por favor...!");
            return "No se encontró el Id";   
        }
        const eliminado = await Persona.findOneAndDelete({_id:id});
        return eliminado;
    } catch (error) {
        console.log(error);
    }
}