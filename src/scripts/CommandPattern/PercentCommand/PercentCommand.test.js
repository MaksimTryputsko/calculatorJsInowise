import { PercentCommand } from './PercentCommand';

describe('Percent command tests', () => {
  test('Should execute command with right answer', () => {
    const multiplyCommand = new PercentCommand(5);
    expect(multiplyCommand.execute()).toBe(0.05);
  });
  test('Should redo command with right answer', () => {
    const multiplyCommand = new PercentCommand(54);
    multiplyCommand.execute();
    expect(multiplyCommand.redo()).toBe(54);
  });
});
