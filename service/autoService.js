const autoRepository = require('../Repository/autoRepository');

exports.getAutos = () => {
    return autoRepository.getAutosRepo();
}

exports.createAuto = (auto) => {
    try {
        autoRepository.createAutoRepo(auto);
    }
     catch (error) {
        console.log(error);
    }
}

exports.getAutoById = async (id) => {
    try {
        return await autoRepository.getAutosById(id);
    } catch (error) {
        console.log(error);
    }
}

exports.updateAuto = (id,autoInfo) => {
    try {
        return autoRepository.updateAutoRepo(id,autoInfo);
    } catch (error) {
        console.log(error)
    }
}

exports.deleteAuto = (id) => {
    try {
        return autoRepository.deleteAutoRepo(id);
    }
     catch (error) {
        console.log(error);
    }
}