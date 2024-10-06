import request from 'supertest';
import { app } from '@app/api/app';

describe('api', () => {
  describe('routers', () => {
    describe('catcherRouter', () => {
      test("should return the expected message with called with '/api/v1/catcher'", async () => {
        // Arrange
        const catcherUrlPath = '/api/v1/catcher';
        const messageExpected = 'TEMP_MESSAGE_GET_PAGE';

        return request(app)
          .get(catcherUrlPath)
          .then((response) => {
            expect(response?.body?.message).toEqual(messageExpected);
          });
      });
      test("should return the expected message with called with '/api/v1/catcher/ (note the trailing slash)'", async () => {
        // Arrange
        const catcherUrlPath = '/api/v1/catcher/';
        const messageExpected = 'TEMP_MESSAGE_GET_PAGE';

        return request(app)
          .get(catcherUrlPath)
          .then((response) => {
            expect(response?.body?.message).toEqual(messageExpected);
          });
      });
    });
  });
});
