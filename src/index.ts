import express from 'express';
import SwaggerUi from 'swagger-ui-express';
// @ts-ignore
import SwaggerFile from './swagger-output.json';
import Routers from './routers';

const app = express();

app.use(express.json());
app.use('/api/v1', Routers);
app.use('/swagger', SwaggerUi.serve, SwaggerUi.setup(SwaggerFile))

app.listen(3000, () => {
  console.log(`Running on 3000`);
});