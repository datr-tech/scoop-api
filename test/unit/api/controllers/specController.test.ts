import { specController } from '@app/api/controllers';

describe('api', () => {
  describe('controllers', () => {
    describe('specController', () => {
      test('should call the mocked response.json function with the expected param', async () => {
        // Arrange
        const specExpected = 'TEMP_SPEC';

        // Act
        const { spec } = specController();

        // Assert
        expect(spec).toEqual(specExpected);
      });
    });
  });
});
