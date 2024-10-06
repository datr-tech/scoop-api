import express from 'express';
import { catcherRouter, specRouter } from '@app/api/routes';

const app = express();

app.use('/api/v1/catcher', catcherRouter);
app.use('/api/v1/spec', specRouter);

export { app };
