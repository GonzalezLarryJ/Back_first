//importacion de modulos necesarios
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');
const morgan = require('morgan');

//Importación de rutas
const example =require('./routes/exampleRoute');

//Inicializar la aplciación
const app = express();


//Configuración del puerto
const port = process.env.port || 3000;

//MIDDLEWARES
//Middleware para manejo de cors
//app.use(cors());
// Middleware para el manejo de JSON y datos URL encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware para el registro de solicitudes HTTP
app.use(morgan('dev'));

// Rutas
//app.use('/api/', exampleRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Inicio del servidor
app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto: http://localhost:${port}/`);
});