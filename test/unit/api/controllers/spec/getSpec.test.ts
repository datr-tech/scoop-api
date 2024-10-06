import express, { Request, Response } from 'express';
import { getSpec } from '@app/api/controllers/spec';

let mockedExpress: jest.Mocked<typeof express>;
let mockedResponseJson: jest.Mock;

describe('api', () => {
  describe('controllers', () => {
    describe('spec', () => {
      describe('getSpec', () => {
        beforeAll(() => {
          jest.mock('express');
          mockedExpress = jest.mocked(express);

          mockedResponseJson = jest.fn();
          mockedExpress.response.json = mockedResponseJson;
        });
        test('should call the mocked response.json function with the expected param', async () => {
          // Arrange
          const callParamExpected = { message: 'TEMP_MESSAGE_GET_SPEC' };
          const request: Request = undefined;
          const response: Response = mockedExpress.response;

          // Act
          await getSpec(request, response);

          // Assert
          expect(mockedResponseJson).toHaveBeenCalledTimes(1);
          expect(mockedResponseJson).toHaveBeenCalledWith(callParamExpected);
        });
      });
    });
  });
});
