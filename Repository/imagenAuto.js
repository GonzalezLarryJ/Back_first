const mongoose = require('mongoose');

const imagenAutoSchema = mongoose.Schema(
    { 
        ruta: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        fechaCreacion: {
            type: String,
            required: true,
        },
        fechaActualizacion: {
            type: String,
            required: true,
        }
    }
)

module.exports = mongoose.model('imagenAuto',imagenAutoSchema)