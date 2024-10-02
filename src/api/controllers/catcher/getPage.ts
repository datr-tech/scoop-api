import { Request, Response } from 'express';

export const getPage = async (req: Request, res: Response) => {
  res.json({ message: 'CATCHER' }).status(200);
};
