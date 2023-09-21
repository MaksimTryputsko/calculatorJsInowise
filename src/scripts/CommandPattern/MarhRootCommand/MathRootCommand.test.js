import { MathRootCommand } from './MathRootCommand';

describe('Mathematical root command tests', () => {
  const mathRootCommand = new MathRootCommand(25, 2);
  test('Should execute command with right answer', () => {
    expect(mathRootCommand.execute()).toBe(5);
  }),
    test('Should redo command with right answer', () => {
      expect(mathRootCommand.redo()).toBe(25);
    });
});
