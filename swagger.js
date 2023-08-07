const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})


const doc = {
    info: {
        version: "1.0.0",
        title: "My Open API example",
        description: "Open API documentation"
    },
    servers: [
        {
          url: "http://localhost:3000/api/v1",
          description: "local server"
        }
    ],
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Customers',         // Tag name
            description: '',  // Tag description
        },
    ],
    securityDefinitions: {},
    definitions: {},
    components: {}
}

const outputFile = './dist/swagger-output.json'
const endpointsFiles = ['./dist/routers/customers.js']

swaggerAutogen(outputFile, endpointsFiles, doc);