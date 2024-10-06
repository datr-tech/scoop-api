import express, { Request, Response } from 'express';
import { getSpec } from '@app/api/controllers/spec';

const router = express.Router({ mergeParams: true });

export const specRouter = router.get('/', async (req: Request, res: Response) => {
  await getSpec(req, res);
});
