import express, { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import { scoopController } from '@app/api/controllers';
import { scriptParamValidator, urlParamValidator } from '@app/api/paramValidators';
import { CONST_ROUTES_BASE } from '@app/config/consts';
import { IRouter } from '@app/interfaces/api';

const router = express.Router({ mergeParams: true });

export const scoopRouter: IRouter = router.get(
  CONST_ROUTES_BASE,
  urlParamValidator,
  scriptParamValidator,
  async (req: Request, res: Response) => {
    const result = validationResult(req);

    try {
      if (result.isEmpty()) {
        const { url, script } = matchedData(req);
        const { page } = await scoopController({ url, script });

        res.send({ page });
      }
    } catch (error) {
      const { message } = error;
      res.send({ error: message });
    }
    res.send({ errors: result.array() });
  },
);
