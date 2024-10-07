import request from 'supertest';
import { app } from '@app/api/app';

describe('api', () => {
  describe('routers', () => {
    describe('scoopRouter', () => {
      test("should return the expected message with called with '/api/v1/scoop'", async () => {
        // Arrange
        const scoopUrlPath = '/api/v1/scoop';
        const messageExpected = 'TEMP_MESSAGE_RUN_SCRIPT';

        return request(app)
          .get(scoopUrlPath)
          .then((response) => {
            const { message } = response?.body;
            expect(message).toEqual(messageExpected);
          });
      });
      test("should return the expected message with called with '/api/v1/scoop/ (note the trailing slash)'", async () => {
        // Arrange
        const scoopUrlPath = '/api/v1/scoop/';
        const messageExpected = 'TEMP_MESSAGE_RUN_SCRIPT';

        return request(app)
          .get(scoopUrlPath)
          .then((response) => {
            const { message } = response?.body;
            expect(message).toEqual(messageExpected);
          });
      });
    });
  });
});
