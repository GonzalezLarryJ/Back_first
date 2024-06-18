const vendedorRepository = require('../Repository/vendedorRepository');

exports.getVendedores = ()=>{
    try {
        return vendedorRepository.getVendedores();
    } catch (error) {
        console.log(error);
    }
}

exports.getVendedor =(id)=>{
    try {
        return vendedorRepository.getVendedor(id);
    } catch (error) {
        console.log(error);
    }
}

exports.createVendedor = async(vendedor)=>{
    try {
        return vendedorRepository.createVendedor(vendedor);
    } catch (error) {
        console.log(error);
    }
}

exports.editVendedor = async(id, vendedor) =>{
    try {
        return vendedorRepository.editVendedor(id,vendedor);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteVendedor = async(id)=>{
    try {
        return vendedorRepository.deleteVendedor(id);
    } catch (error) {
        console.log(error);
    }
}