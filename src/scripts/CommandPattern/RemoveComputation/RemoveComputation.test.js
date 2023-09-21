import { RemoveComputation } from './RemoveComputation';

describe('Remove computation command tests', () => {
  const removeComputation = new RemoveComputation(20);
  test('Should execute command with right answer', () => {
    expect(removeComputation.execute()).toBe(0);
  }),
    test('Should redo command with right answer', () => {
      expect(removeComputation.redo()).toBe(20);
    });
});
