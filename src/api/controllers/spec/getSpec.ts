import { Request, Response } from 'express';

export const getSpec = async (req: Request, res: Response) => {
  res.json({ message: 'SPEC' }).status(200);
};
