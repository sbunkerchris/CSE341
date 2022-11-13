const swaggerAutogen = require('swagger-autogen')();
const port = 3000 || process.env.PORT

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: `localhost:${port}`,
  schemes: ['https'],
};

console.log('doc start: ' + doc + ' doc end.');

const outputFile = './swagger.json';
const endpointsFiles = ['./app.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);