//importacion de modulos necesarios
const express = require('express');
const personaRouter = require('./routers/personaRouter');
const port = process.env.port || 3000;
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
//const cors = require('cors');


//MIDDLEWARES
//app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api/persona', personaRouter);

// Rutas
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