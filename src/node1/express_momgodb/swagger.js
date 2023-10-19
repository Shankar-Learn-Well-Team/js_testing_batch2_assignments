const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = require('./swaggerDefinition.json'); 

const specs = swaggerJsdoc({
    swaggerDefinition,
    apis: ['*.js'], // Specify the path to your API files
});

module.exports = {
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(specs),
};
