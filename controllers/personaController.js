const Persona = require('../Repository/persona');
const personaService = require('../service/personasService');

exports.getPersonas = async(req, res)=>{ 
    try {
        let personas = await personaService.getPersonas();
        res.status(200).send(personas);
    } catch (error) {
        res.status(500).send('Hubo un error al intentar recuperar a las personas');
    }
}

exports.getPersona = async(req, res)=>{
    try {
        let persona = await personaService.getPersona(id);
        res.status(200).send(persona);
    } catch (error) {
        res.sttus(500).send('Hubo un error en la consulta del registro');
    }
}

exports.createPersona = async(req, res)=>{
    try {
        let personaCreaada = await personaService.createPersona(req.body);
        res.status(200).send(personaCreaada);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al crear a la persona..!')
    }
}


 
exports.editPersona = async(req, res)=>{
    let persona = req.body;
    let id = req.params.id;
    try {
        let personaEditada = await personaService.editPersona(id, persona);
        res.status(200).send(personaEditada)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al editar la persona.") 
    }
}

exports.deletePersona = async(req,res)=>{
    
    try {
        let id = req.params.id;
        await personaService.deletePersona(id);
        res.status(200).send('Persona Eliminada..!')
    } catch (error) {
        res.status(500).send('Hubo un error al tratar de eliminar');
    }
}
