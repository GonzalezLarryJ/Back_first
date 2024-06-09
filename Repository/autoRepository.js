const Autos = require('./Auto')
const conectarDb = require('../db/db')

conectarDb();

exports.getAutosRepo = async () => {
    try {
        let autos = await Autos.find();
        return autos
    } catch (error) {
        console.log(error);
    }
}

exports.getAutosById = async (id) => {
    try {
        let auto = await Autos.findById(id)
        if(!auto) {
            console.log("no consegui el auto")
            return "no consegui el auto (repository)";
        } 
        return auto;
    } catch (error) {
        console.log(error);
    }
}

exports.createAutoRepo = async(auto) => {

    try{
         let newAuto = Autos(auto);
        await newAuto.save();
    }
    catch (error) {
        console.log(error);
    }
}

exports.updateAutoRepo = async (id,autoInfo) => {
    try {
        let auto = await Autos.findById(id);
        if(!auto){
            res.json("No existe el auto que desea actualizar");
        }
        auto = Autos.findOneAndReplace(
            {_id: id}, autoInfo,{new: true})
            return auto;
    } catch (error) {
        console.log(error)
    }
}

exports.deleteAutoRepo = async (id) => {
    try {
        let auto = await Autos.findById(id);
        if(!auto){
            console.log("No existe el auto a eliminar")
            return ""
        } 
        await Autos.findOneAndDelete({_id:id});
    } catch (error) {
        console.log(error);
    }
}