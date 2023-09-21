import { FactorialCommand } from './FactorialCommand';

describe('Factorial command tests', () => {
  const factorialCommand = new FactorialCommand(5);
  test('Should execute command with right answer', () => {
    expect(factorialCommand.execute()).toBe(120);
  }),
    test('Should redo command with right answer', () => {
      expect(factorialCommand.redo()).toBe(5);
    });
});
