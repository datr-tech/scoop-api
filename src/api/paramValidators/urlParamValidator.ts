import { param } from 'express-validator';
import { PARAM_NAME_URL } from '@app/config/consts';
import { IParamValidator } from '@app/interfaces/api/IParamValidator';

export const urlParamValidator: IParamValidator = param(PARAM_NAME_URL).notEmpty().isString().trim().isURL();
