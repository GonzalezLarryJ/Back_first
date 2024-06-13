const Autos = require('./Auto')
const conectarDb = require('../db/db')

conectarDb();

/**
 * Busca todos los autos 
 * @returns Devuelve todos los autos del listado de la base de datos
 */
exports.getAutosRepo = async () => {
    try {
        let autos = await Autos.find();
        return autos
    } catch (error) {
        console.log(error);
    }
}
/**
 * método de búsqueda por ID
 * @param {Auto.id} id - El identificador del elemento que se quiere buscar
 * @returns -El objeto que encuentra correspondiente al ID otorgado
 */
exports.getAutosById = async (id) => {
    try {
        let auto = await Autos.findById(id)
        if(!auto) {
            return "no consegui el auto";
        } 
        return auto;
    } catch (error) {
        console.log(error);
    }
}

/**
 * método para guardar el nuevo objeto cargado en la base de datos
 * @param {Auto} auto - Es el objeto que recibe y que posteriormente guardará
 */

exports.createAutoRepo = async(auto) => {

    try{
         let newAuto = Autos(auto);
        await newAuto.save();
    }
    catch (error) {
        console.log(error);
    }
}

/**
 * Método que funciona para actualizar los datos de un auto que está previamente cargado. Cambia todos los elementos del documento.
 * @param {Auto.id} id 
 * @param {Auto} autoInfo 
 * @returns {Auto} 
 */

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

/**
 * Método que funciona para eliminar un documento de la base de datos
 * @param {Auto.id} id - busca por ID el auto que quiere eliminarse
 * @returns {""} 
 */

exports.deleteAutoRepo = async (id) => {
    try {
        let auto = await Autos.findById(id);
        if(!auto){
            return "No existe el auto a eliminar"
        } 
        await Autos.findOneAndDelete({_id:id});
    } catch (error) {
        console.log(error);
    }
}