import express, { Request, Response } from 'express';
import { runScript } from '@app/api/controllers/scoop';

let mockedExpress: jest.Mocked<typeof express>;
let mockedResponseJson: jest.Mock;

describe('api', () => {
  describe('controllers', () => {
    describe('scoop', () => {
      describe('runScript', () => {
        beforeAll(() => {
          jest.mock('express');
          mockedExpress = jest.mocked(express);

          mockedResponseJson = jest.fn();
          mockedExpress.response.json = mockedResponseJson;
        });
        test('should call the mocked response.json function with the expected param', async () => {
          // Arrange
          const script = 'TEST_SCRIPT';
          const url = 'TEST_URL';
          const callParamExpected = { message: 'TEMP_MESSAGE_RUN_SCRIPT', script, url };
          const request = {
            params: {
              url,
              script,
            },
          } as unknown as Request;
          const response: Response = mockedExpress.response;

          // Act
          await runScript(request, response);

          // Assert
          expect(mockedResponseJson).toHaveBeenCalledTimes(1);
          expect(mockedResponseJson).toHaveBeenCalledWith(callParamExpected);
        });
      });
    });
  });
});
