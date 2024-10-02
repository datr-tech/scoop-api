import express from 'express';
import { getSpec } from '@app/api/controllers/spec';

const router = express.Router();

export const spec = async () => {
  router.get('/', getSpec);
};
