import { Request } from 'express';

export const requestMockBuilder = (params: object = {}, body: object = {}): Request => {
  return {
    body,
    params,
  } as Request;
};
