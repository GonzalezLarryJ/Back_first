const autoService = require('../service/autoService');

exports.readAutos = async (req,res) => {
    try {
        let autos = await autoService.getAutos();
        res.status(200).send(autos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al intentar obtener los autos")
    }
}

exports.getAuto = async (req,res) => {
    try {
        let id = req.params.id;
        const auto = await autoService.getAutoById(id);
        res.status(200).send(auto);
    } catch (error) {
        console.error(error);
        res.status(500).send("Hubo un error al intentar obtener el auto IDID")
    }
}

exports.createAuto = async (req,res) => {
    try {
        const auto = await autoService.createAuto(req.body)
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al intentar crear el auto")
    }
}

exports.updateAuto = async (req,res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        const updatedAuto = await autoService.updateAuto(id, body)
        if(!updatedAuto){
            return res.status(404).json("no se pudo actualizar los datos del auto")
        }
        res.status(200).send(updatedAuto)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al intentar editar los datos del auto")
    }
}

exports.deleteAuto = async(req,res) => {
    try {
        await autoService.deleteAuto(req.params.id);
        res.status(200).send("El auto se eliminó con éxito");
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar los datos del auto")
    }
}