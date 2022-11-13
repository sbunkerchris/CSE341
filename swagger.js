const swaggerAutogen = require('swagger-autogen')();
const baseURL = ENV.baseURL;
const port = process.env.PORT || 8080;

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: `cse341-rduw.onrender.com`,
  schemes: ['https'],
};

console.log('doc start: ' + doc + ' doc end.');

const outputFile = './swagger.json';
const endpointsFiles = ['./app.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);