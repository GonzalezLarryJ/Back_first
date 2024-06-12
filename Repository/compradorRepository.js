const Comprador = require('./comprador');
//const conectarDB = require('../db/db');

//conectarDB();

exports.getCompradores = async()=>{
    try {
        let comprador = await Comprador.find();
        console.log(comprador);
        return comprador
    } catch (error) {
        console.log(error);
    }
}

exports.getComprador = async(id)=>{
    try {
        let comprador = await Comprador.findById(id);
        if (!comprador) {
            console.log("No existe el comprador que quieres consultar");
            return "No se encontró al comprador...!"
        }
        return comprador;
    } catch (error) {
        console.log(error);
    }
}

exports.createComprador = async(comprador)=>{
    try {
        let newComprador = new Comprador(comprador);
        await newComprador.save();
        return newComprador;
    } catch (error) {
        console.log(error);
    }
}

exports.editComprador = async(id, compradorData)=>{
    try {
        if (!id) {
            console.log("No se encontró el Id");
            return "Id no encontrado";
        }
        let compradorB = await Comprador.findById({_id:id});
        if (!compradorB) {
            console.log("No se encontró el registro");
            return "No existe el registro"
        }
        const updateComprador = await Comprador.findOneAndReplace({_id:id},compradorData);
        return updateComprador;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteComprador = async(id)=>{
    try {
        if (!id) {
            console.log("No consigo el Id del comprador..!");
            return "no se encontró el Id del comprador"
        }
        const eliminado = await Comprador.findOneAndDelete({_id:id});
        return eliminado;
    } catch (error) {
        console.log(error);
    }
}

