const vendedorService = require('../service/vendedorService');

exports.getVendedores = async(req, res)=>{
    try {
        let Vendedores = await vendedorService.getVendedores();
        res.status(200).send(Vendedores)
    } catch (error) {
        res.status(500).send('Hubo un error al intentar recuperar los registros de los Vendedores')
    }
}

exports.getVendedor = async(req, res)=>{
    let id = req.params.id;
    try {
        let Vendedor = await vendedorService.getVendedor(id);
        res.status(200).send(Vendedor);
    } catch (error) {
        res.status(500).send('hubo un error en la consulta del registro del Vendedor');
        console.log(error);
    }
}

exports.createVendedor = async(req, res)=>{
    try {
        let VendedorCreado = await vendedorService.createVendedor(req.body);
        res.status(200).send(VendedorCreado);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error en la creacion del registro del Vendedor')
    }
}

exports.editVendedor = async (req, res)=>{
    let Vendedor = req.body;
    let id = req.params.id;
    try {
        let VendedorEditado = await vendedorService.editVendedor(id, Vendedor);
        res.status(200).send(VendedorEditado);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al editar el registro del Vendedor.");
    }
}

exports.deleteVendedor = async(req, res)=>{
    try {
        let id = req.params.id;
        await vendedorService.deleteVendedor(id);
        res.status(200).send('Vendedor eliminado..!');
    } catch (error) {
        res.status(500).send('Hubo un error al tratar de eliminar el registro del Vendedor.');
    }
}