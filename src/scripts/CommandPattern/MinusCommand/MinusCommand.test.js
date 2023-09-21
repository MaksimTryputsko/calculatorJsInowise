import { MinusCommand } from './MinusCommand';

describe('Minus command tests', () => {
  const minusCommand = new MinusCommand(20, 8);
  test('Should execute command with right answer', () => {
    expect(minusCommand.execute()).toBe(12);
  }),
    test('Should redo command with right answer', () => {
      expect(minusCommand.redo()).toBe(20);
    });
});
