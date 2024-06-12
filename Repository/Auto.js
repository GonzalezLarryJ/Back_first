const mongoose = require('mongoose');

const autoSchema = mongoose.Schema(
    { 
        marca: {
            type: String,
            required: true,
        },
        modelo: {
            type: String,
            required: true,
        },
        anio: {
            type: Number,
            required: true,
        },
        estado: {
            type: String,
            required: true,
        },
        precio: {
            type: Number,
            required: false,
        },
        kilometros: {
            type: Number,
            required: false,
        },
        descripcion: {
            type: String,
            required: false,
        },
        fechaCreacion: {
            type: Date,
            required: false,
        },
        fechaActualizacion:{
            type: Date,
            required: false
        }
    }
)

module.exports = mongoose.model('auto',autoSchema)
