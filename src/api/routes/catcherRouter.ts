import express, { Request, Response } from 'express';
import { getPage } from '@app/api/controllers/catcher';

const router = express.Router({ mergeParams: true });

export const catcherRouter = router.get('/', async (req: Request, res: Response) => {
  await getPage(req, res);
});
