import { param } from 'express-validator';
import { PARAM_URL } from '@app/config/consts';

export const urlParam = param(PARAM_URL).notEmpty();
