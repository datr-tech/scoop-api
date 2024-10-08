import express from 'express';
import { scoopRouter, specRouter } from '@app/api/routes';

const app = express();

app.use(express.json());
app.use('/api/v1/scoop', scoopRouter);
app.use('/api/v1/spec', specRouter);

export { app };
