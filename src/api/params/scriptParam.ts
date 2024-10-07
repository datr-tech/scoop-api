import { param } from 'express-validator';
import { PARAM_SCRIPT } from '@app/config/consts';

export const scriptParam = param(PARAM_SCRIPT).notEmpty();
