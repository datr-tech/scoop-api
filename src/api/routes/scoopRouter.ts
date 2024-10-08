import express, { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import { runScript } from '@app/api/controllers/scoop';
import { scriptParamValidator, urlParamValidator } from 'src/api/paramValidators';

const router = express.Router({ mergeParams: true });

export const scoopRouter = router.get(
  '/',
  urlParamValidator,
  scriptParamValidator,
  async (req: Request, res: Response) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      const { url, script } = matchedData(req);
      const content = await runScript({ url, script });

      res.send({ content });
    }

    res.send({ errors: result.array() });
  },
);
