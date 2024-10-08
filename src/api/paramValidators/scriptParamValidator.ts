import { param } from 'express-validator';
import { PARAM_NAME_SCRIPT } from '@app/config/consts';
import { IParamValidator } from '@app/interfaces/api/IParamValidator';

export const scriptParamValidator: IParamValidator = param(PARAM_NAME_SCRIPT).notEmpty().isString().trim();
