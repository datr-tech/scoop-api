import { param } from 'express-validator';
import { PARAM_NAME_SCRIPT } from '@app/config/consts';

export const scriptParamValidator = param(PARAM_NAME_SCRIPT).notEmpty().isString();
