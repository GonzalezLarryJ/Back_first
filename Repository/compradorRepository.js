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

