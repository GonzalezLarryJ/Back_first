const personaRepository = require('../Repository/personaRepository');

exports.getPersonas = ()=>{
    try {
        return personaRepository.getPersonas();
    } catch (error) {
        console.log(error);
    }
}

exports.getPersona = (id)=>{
    try {
        return personaRepository.getPersona(id);
    } catch (error) {
        console.log(error);
    }
}

exports.createPersona = async(persona)=>{
    try {
        return personaRepository.createPersona(persona);
    } catch (error) {
        console.log(error);
    }
}

exports.editPersona = async(id, persona)=>{
    try {
        return personaRepository.editPersona(id,persona);
    } catch (error) {
        console.log(error);
    }
}

exports.deletePersona = async(id)=>{
    try {
        return personaRepository.deletePersona(id);
    } catch (error) {
        console.log(error);
    }
}