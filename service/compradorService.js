const compradorRepository = require('../Repository/compradorRepository');

exports.getCompradores = ()=>{
    try {
        return compradorRepository.getCompradores();
    } catch (error) {
        console.log(error);
    }
}

exports.getComprador =(id)=>{
    try {
        return compradorRepository.getComprador(id);
    } catch (error) {
        console.log(error);
    }
}

exports.createComprador = async(comprador)=>{
    try {
        return compradorRepository.createComprador(comprador);
    } catch (error) {
        console.log(error);
    }
}




