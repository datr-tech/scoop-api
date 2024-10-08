import { param } from 'express-validator';
import { PARAM_NAME_URL } from '@app/config/consts';

export const urlParamValidator = param(PARAM_NAME_URL).trim().notEmpty().isURL();
