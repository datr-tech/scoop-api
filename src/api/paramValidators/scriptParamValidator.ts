import { param } from 'express-validator';
import { CONST_PARAM_NAMES_SCRIPT } from '@app/config/consts';
import { IParamValidator } from '@app/interfaces/api';

export const scriptParamValidator: IParamValidator = param(CONST_PARAM_NAMES_SCRIPT).notEmpty().isString().trim();
