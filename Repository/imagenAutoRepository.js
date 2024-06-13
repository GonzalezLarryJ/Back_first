const ImagenAuto = require('./imagenAuto')
const conectarDb = require('../db/db')

conectarDb();

/**
 * Busca todos 
 * @returns Devuelve todos 
 */
exports.getImagenesAutoRepo = async () =>{
    try {
        let imagenesAuto = await ImagenAuto.find();
        return imagenesAuto
    } catch (error) {
        console.log(error);
    }
}


exports.getImagenAutoById = async (id) => {
    try {
        let imagenAuto = await ImagenAuto.findById(id)
        if(!imagenAuto) {
            return "No obtuve los datos de la imagen del auto"
        }
        return imagenAuto;
    } catch (error) {
        console.log(error);
    }
}

exports.createimagenAutoRepo = async(imagenAuto) => {

    try{
         let newImagenAuto = ImagenAuto(imagenAuto);
        await newImagenAuto.save();
    }
    catch (error) {
        console.log(error);
    }
}

exports.updateImagenAutoRepo = async (id,imagenAutoInfo) => {
    try {
        let imagenAuto = await ImagenAuto.findById(id);
        if(!imagenAuto){
            return"No existe los datos de imagen auto que desea actualizar";
        }
        imagenAuto = ImagenAuto.findOneAndReplace(
            {_id: id}, imagenAutoInfo,{new: true})
            return imagenAuto;
    } catch (error) {
        console.log(error)
    }
}

exports.deleteImagenAutoRepo = async (id) => {
    try {
        let imagenAuto = await ImagenAuto.findById(id);
        if(!imagenAuto){
            return "No existe los datos de imagen auto que desea eliminar"
        } 
        await ImagenAuto.findOneAndDelete({_id:id});
    } catch (error) {
        console.log(error);
    }
}