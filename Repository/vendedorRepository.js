const Vendedor = require('./vendedor');
//const conectarDB = require('../db/db');

//conectarDB();

exports.getVendedores = async()=>{
    try {
        let vendedor = await Vendedor.find();
        //console.log(vendedor);
        return vendedor
    } catch (error) {
        console.log(error);
    }
}

exports.getVendedor = async(id)=>{
    try {
        let vendedor = await Vendedor.findById(id);
/*         if (!vendedor) {
            console.log("No existe el Vendedor que quieres consultar");
            return "No se encontró el Vendedor...!"
        } */
        console.log(vendedor);
        return vendedor;
    } catch (error) {
        console.log(error);
    }
}

exports.createVendedor = async(vendedor)=>{
    try {
        let newVendedor = new Vendedor(vendedor);
        await newVendedor.save();
        return newVendedor;
    } catch (error) {
        console.log(error);
    }
}

exports.editVendedor = async(id, vendedorData)=>{
    try {
        if (!id) {
            console.log("No se encontró el Id del Vendedor");
            return "Id del Vendedor no encontrado";
        }
        let vendedorB = await Vendedor.findById({_id:id});
        if (!vendedorB) {
            console.log("No se encontró el registro del Vendedor");
            return "No existe el registro del Vendedor"
        }
        const updateVendedor = await Vendedor.findOneAndReplace({_id:id},vendedorData);
        return updateVendedor;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteVendedor = async(id)=>{
    try {
        if (!id) {
            console.log("No se encontró el Id del Vendedor..!");
            return "no se encontró el Id del Vendedor"
        }
        const eliminado = await Vendedor.findOneAndDelete({_id:id});
        return eliminado;
    } catch (error) {
        console.log(error);
    }
}