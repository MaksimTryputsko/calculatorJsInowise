import { DivideCommand } from './DivideCommand';

describe('Divide command tests', () => {
  test('Should execute command with right answer', () => {
    const divideCommand = new DivideCommand(5, 2);
    expect(divideCommand.execute()).toBe(2.5);
  });
  test('Should redo command with right answer', () => {
    const divideCommand = new DivideCommand(50, 3);
    divideCommand.execute();
    expect(divideCommand.redo()).toBe(50);
  });
});
