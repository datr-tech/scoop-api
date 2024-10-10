import express, { Request, Response } from 'express';
import { specController } from '@app/api/controllers';
import { CONST_ROUTES_BASE, CONST_RESPONSE_STATUSES_ERROR } from '@app/config/consts';
import { IRouter } from '@app/interfaces/api';

const router = express.Router({ mergeParams: true });

export const specRouter: IRouter = router.get(CONST_ROUTES_BASE, async (_req: Request, res: Response) => {
  try {
    const { spec } = specController();
    res.send({ spec });
  } catch (error) {
    const { message } = error;
    res.status(CONST_RESPONSE_STATUSES_ERROR).send({ message });
  }
});
