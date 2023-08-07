import express from "express";
import CustomersRouter from './customers';

const router: express.Application = express();

router.use('/', CustomersRouter);

export default router;