import { PercentCommand } from './PercentCommand';

describe('Percent command tests', () => {
  const multiplyCommand = new PercentCommand(5);
  test('Should execute command with right answer', () => {
    expect(multiplyCommand.execute()).toBe(0.05);
  }),
    test('Should redo command with right answer', () => {
      expect(multiplyCommand.redo()).toBe(5);
    });
});
