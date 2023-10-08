import { RemoveComputation } from './RemoveComputation';

describe('Remove computation command tests', () => {
  test('Should execute command with right answer', () => {
    const removeComputation = new RemoveComputation(20);
    expect(removeComputation.execute()).toBe(0);
  });
  test('Should redo command with right answer', () => {
    const removeComputation = new RemoveComputation(120);
    removeComputation.execute();
    expect(removeComputation.redo()).toBe(120);
  });
});
