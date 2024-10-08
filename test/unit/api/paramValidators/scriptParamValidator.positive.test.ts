import { Request } from 'express';
import { scriptParamValidator } from '@app/api/paramValidators';
import { requestMockBuilder } from '@appTest/mocks';

const positiveTestData = [
  // The 'expected' number of errors per valid 'script'
  { expected: 0, script: '.' },
  { expected: 0, script: '*' },
  { expected: 0, script: '\\' },
  { expected: 0, script: ' ' },
  { expected: 0, script: 'MOCK_SCRIPT' },
];

describe('api', () => {
  describe('paramValidators', () => {
    describe('scriptParamValidator', () => {
      describe("positive: should return an empty 'errors' array, indicating that no errors have been found", () => {
        test.each(positiveTestData)(
          "when the value of the 'script' property within 'params' is '$script' (from 'positiveTestData)",
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
