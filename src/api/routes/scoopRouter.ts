import express, { Request, Response } from 'express';
import { runScript } from '@app/api/controllers/scoop';
import { scriptParam, urlParam } from '@app/api/params';

const router = express.Router({ mergeParams: true });

export const scoopRouter = router.get('/', urlParam, scriptParam, async (req: Request, res: Response) => {
  await runScript(req, res);
});
