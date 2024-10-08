import { Request } from 'express';
import { scriptParamValidator } from '@app/api/paramValidators';
import { requestMockBuilder } from '@appTest/mocks';

const negativeTestData = [
  // The 'expected' number of errors per invalid 'script'
  { expected: 2, script: undefined },
  { expected: 1, script: '' },
  { expected: 1, script: {} },
  { expected: 1, script: Boolean(true) },
  { expected: 1, script: true },
  { expected: 1, script: false },
  { expected: 1, script: [] },
  { expected: 1, script: ['STRING_WITHIN_INVALID_ARRAY'] },
];

describe('api', () => {
  describe('paramValidators', () => {
    describe('scriptParamValidator', () => {
      describe("negative: should return a non-empty 'errors' array, indicating that errors have been found", () => {
        test.each(negativeTestData)(
          "when the value of the 'script' property within 'params' is '$script' (from 'negativeTestData)",
          async ({ expected, script }) => {
            // Arrange
            const params = { script };
            const req = requestMockBuilder(params) as Request;

            // Act
            const { context } = await scriptParamValidator.run(req);
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
