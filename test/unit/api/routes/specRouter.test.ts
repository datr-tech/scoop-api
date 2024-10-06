import request from 'supertest';
import { app } from '@app/api/app';

describe('api', () => {
  describe('routers', () => {
    describe('spec', () => {
      test("should return the expected message with called with '/api/v1/spec'", async () => {
        // Arrange
        const specUrlPath = '/api/v1/spec';
        const messageExpected = 'TEMP_MESSAGE_GET_SPEC';

        return request(app)
          .get(specUrlPath)
          .then((response) => {
            expect(response?.body?.message).toEqual(messageExpected);
          });
      });
      test("should return the expected message with called with '/api/v1/spec/ (note the trailing slash)'", async () => {
        // Arrange
        const specUrlPath = '/api/v1/spec/';
        const messageExpected = 'TEMP_MESSAGE_GET_SPEC';

        return request(app)
          .get(specUrlPath)
          .then((response) => {
            expect(response?.body?.message).toEqual(messageExpected);
          });
      });
    });
  });
});
