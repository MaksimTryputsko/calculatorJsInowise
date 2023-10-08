import { MultiplyCommand } from './MultiplyCommand';

describe('Multiply command tests', () => {
  const multiplyCommand = new MultiplyCommand(20, 10);
  test('Should execute command with right answer', () => {
    expect(multiplyCommand.execute()).toBe(200);
  });
  test('Should redo command with right answer', () => {
    const multiplyCommand = new MultiplyCommand(220, 110);
    multiplyCommand.execute();
    expect(multiplyCommand.redo()).toBe(220);
  });
});
