import { Request, Response } from 'express';

export const getSpec = async (_req: Request, res: Response) => {
  res.json({ message: 'TEMP_MESSAGE_GET_SPEC' });
};
