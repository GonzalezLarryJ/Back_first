//importacion de modulos necesarios
const express = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
const personaRouter = require('./routers/personaRouter');
const routerComprador = require('./routers/compradorRouter');
const autoRouter = require('./routers/autoRouter');
const imagenAutoRouter = require('./routers/imagenAutoRouter');
const vendodorRouter = require('./routers/vendedorRouter');
const port = process.env.port || 3000;
const app = express();
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
const bodyParser = require('body-parser');
const morgan = require('morgan');
const conectarDB = require('./db/db');
const cors = require('cors');

conectarDB();


//MIDDLEWARES
app.use(cors());
//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api/persona', personaRouter);
app.use('/api/comprador', routerComprador);
app.use('/api/autos',autoRouter);
app.use('/api/imagenAuto',imagenAutoRouter);
app.use('/api/vendedor',vendodorRouter);
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