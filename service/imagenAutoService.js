const Auto = require('../Repository/Auto');
const imagenAutoRepository = require('../Repository/imagenAutoRepository');

exports.getImagenesAuto = () => {
    return imagenAutoRepository.getImagenesAutoRepo();
}

exports.createImagenAuto = (imagenAuto) => {
    try {
        imagenAutoRepository.createimagenAutoRepo(imagenAuto);
    }
     catch (error) {
        console.log(error);
    }
}

exports.getImagenAutoById = async (id) => {
    try {
        return await imagenAutoRepository.getImagenAutoById(id);
    } catch (error) {
        console.log(error)
    }
}

exports.updateImagenAuto = (id,imagenAutoInfo) => {
    try {
        return imagenAutoRepository.updateImagenAutoRepo(id,imagenAutoInfo);
    } catch (error) {
        console.log(error)
    }
}

exports.deleteImagenAuto = (id) => {
    try {
        return imagenAutoRepository.deleteImagenAutoRepo(id);
    }
     catch (error) {
        console.log(error);
    }
}