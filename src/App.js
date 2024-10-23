const express = require('express');
const app = express();
const mocksRouter = require('./mocks.router');
const usersRouter = require('./routes/users.router');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios y Mocks',
      version: '1.0.0',
      description: 'API para gestionar usuarios y mocks',
      contact: {
        name: 'Desarrollador',
        email: 'developer@example.com'
      },
      servers: [{ url: 'http://localhost:3000' }]
    }
  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());

app.use('/api/mocks', mocksRouter);
app.use('/users', usersRouter); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
