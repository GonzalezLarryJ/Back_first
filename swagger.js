const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API Prueba de Swagger',
    description: 'My API Prueba de Swagger'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc).then(()=>{
    require('./server.js');
});