import { Request } from 'express';
import { urlParamValidator } from '@app/api/paramValidators';
import { requestMockBuilder } from '@appTest/mocks';

const negativeTestData = [
  // The 'expected' number of errors per invalid 'url'
  { expected: 3, url: undefined },
  { expected: 2, url: '' },
  { expected: 1, url: ' ' },
  { expected: 1, url: '@' },
  { expected: 1, url: '/' },
  { expected: 1, url: 'http' },
  { expected: 1, url: 'http.*.com' },
  { expected: 2, url: true },
  { expected: 2, url: false },
  { expected: 1, url: [] },
  { expected: 2, url: {} },
];

describe('api', () => {
  describe('paramValidators', () => {
    describe('urlParamValidator', () => {
      describe("negative: should return a non-empty 'errors' array, indicating that errors have been found", () => {
        test.each(negativeTestData)(
          "when the value of the 'url' property within 'params' is '$url' (from 'negativeTestData)",
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
