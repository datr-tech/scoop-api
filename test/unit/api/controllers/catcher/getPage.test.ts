import express, { Request, Response } from 'express';
import { getPage } from '@app/api/controllers/catcher';

let mockedExpress: jest.Mocked<typeof express>;
let mockedResponseJson: jest.Mock;

describe('api', () => {
  describe('controllers', () => {
    describe('catcherRouter', () => {
      describe('getPage', () => {
        beforeAll(() => {
          jest.mock('express');
          mockedExpress = jest.mocked(express);

          mockedResponseJson = jest.fn();
          mockedExpress.response.json = mockedResponseJson;
        });
        test('should call the mocked response.json function with the expected param', async () => {
          // Arrange
          const callParamExpected = { message: 'TEMP_MESSAGE_GET_PAGE' };
          const request: Request = undefined;
          const response: Response = mockedExpress.response;

          // Act
          await getPage(request, response);

          // Assert
          expect(mockedResponseJson).toHaveBeenCalledTimes(1);
          expect(mockedResponseJson).toHaveBeenCalledWith(callParamExpected);
        });
      });
    });
  });
});
