import { param } from 'express-validator';
import { CONST_PARAM_NAMES_URL } from '@app/config/consts';
import { IParamValidator } from '@app/interfaces/api';

export const urlParamValidator: IParamValidator = param(CONST_PARAM_NAMES_URL).notEmpty().isString().trim().isURL();
