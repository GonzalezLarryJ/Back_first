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
            type: Date,
            required: true,
        },
        fechaActualizacion: {
            type: Date,
            required: true,
        }
    }
)

module.exports = mongoose.model('imagenAuto',imagenAutoSchema)