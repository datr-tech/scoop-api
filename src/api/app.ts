import express from 'express';
import { catcher, spec } from '@app/api/routes';
import { logger } from '@app/utils/logger';

const app = express();

app.use('/api/v1/catcher', catcher);
app.use('/api/v1/spec', spec);

app.get('/', (req, res) => {
  logger.info('root call');
  res.send('hello world');
});

export { app };
