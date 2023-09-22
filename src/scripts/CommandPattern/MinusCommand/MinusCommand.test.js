import { MinusCommand } from './MinusCommand';

describe('Minus command tests', () => {
  test('Should execute command with right answer', () => {
    const minusCommand = new MinusCommand(20, 8);
    expect(minusCommand.execute()).toBe(12);
  });
  test('Should redo command with right answer', () => {
    const minusCommand = new MinusCommand(33, 2);
    minusCommand.execute();
    expect(minusCommand.redo()).toBe(33);
  });
});
