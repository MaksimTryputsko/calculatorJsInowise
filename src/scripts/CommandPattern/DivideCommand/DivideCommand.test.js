import { DivideCommand } from './DivideCommand';

describe('Divide command tests', () => {
  const divideCommand = new DivideCommand(5, 2);
  test('Should execute command with right answer', () => {
    expect(divideCommand.execute()).toBe(2.5);
  }),
    test('Should redo command with right answer', () => {
      expect(divideCommand.redo()).toBe(5);
    });
});
