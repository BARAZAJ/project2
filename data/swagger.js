const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Management API',
            version: '1.0.0',
            description: 'A simple API for managing users',
        },
        servers: [
            {
                url: 'http://localhost:3001', // Replace with your production URL when deployed
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const swaggerUiSetup = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = swaggerUiSetup;



