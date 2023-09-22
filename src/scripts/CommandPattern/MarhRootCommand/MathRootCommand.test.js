import { MathRootCommand } from './MathRootCommand';

describe('Mathematical root command tests', () => {
  test('Should execute command with right answer', () => {
    const mathRootCommand = new MathRootCommand(25, 2);
    expect(mathRootCommand.execute()).toBe(5);
  });
  test('Should redo command with right answer', () => {
    const mathRootCommand = new MathRootCommand(36, 3);
    mathRootCommand.execute();
    expect(mathRootCommand.redo()).toBe(36);
  });
});
