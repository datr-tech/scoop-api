import { Request } from 'express';
import { urlParamValidator } from '@app/api/paramValidators';
import { requestMockBuilder } from '@appTest/mocks';

const positiveTestData = [
  // The 'expected' number of errors per valid 'url'
  { expected: 0, url: 'http://www.mock-address.com' },
  { expected: 0, url: 'https://www.mock.address.co.uk' },
  { expected: 0, url: 'http://mockaddress.io' },
  { expected: 0, url: 'http://mock-address.gov' },
  { expected: 0, url: 'mock-address.fr' },
];

describe('api', () => {
  describe('paramValidators', () => {
    describe('urlParamValidator', () => {
      describe("positive: should return an empty 'errors' array, indicating that no errors have been found", () => {
        test.each(positiveTestData)(
          "when the value of the 'url' property within 'params' is '$url' (from 'positiveTestData)",
          async ({ expected, url }) => {
            // Arrange
            const params = { url };
            const req = requestMockBuilder(params) as Request;

            // Act
            const { context } = await urlParamValidator.run(req);
            const { errors } = context;
            const found = errors.length;

            // Assert
            expect(found).toBe(expected);
          },
        );
      });
    });
  });
});
