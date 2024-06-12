const imagenAutoService = require('../service/imagenAutoService');

exports.readImagenesAuto = async (req,res) => {
    try {
        let imagenesAuto = await imagenAutoService.getImagenesAuto();
        res.status(200).send(imagenesAuto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al intentar obtener las imagenes de autos")
    }
}

exports.getImagenAuto = async (req,res) => {
    try {
        let id = req.params.id;
        const imagenAuto = await imagenAutoService.getImagenAutoById(id);
        res.status(200).send(imagenAuto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al intentar obtener los autos")
    }
}

exports.createImagenAuto = async (req,res) => {
    try {
        await imagenAutoService.createImagenAuto(req.body)
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al intentar crear el auto")
    }
}

exports.updateImagenAuto = async (req,res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        const updatedImagenAuto = await imagenAutoService.updateImagenAuto(id, body)
        if(!updatedImagenAuto){
            return res.status(404).json("no se pudo actualizar los datos de la imagen del auto")
        }
        res.status(200).send(updatedImagenAuto)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al intentar editar los datos de la imagen del auto")
    }
}

exports.deleteImagenAuto = async(req,res) => {
    try {
        await imagenAutoService.deleteImagenAuto(req.params.id);
        res.status(200).send("Los datos de imagen del auto se eliminaron con éxito");
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar los datos de la imagen auto")
    }
}