import { Request, Response } from 'express';

export const runScript = async (req: Request, res: Response) => {
  const url = req.params.url;
  const script = req.params.script;

  res.json({
    message: 'TEMP_MESSAGE_RUN_SCRIPT',
    script,
    url,
  });
};
