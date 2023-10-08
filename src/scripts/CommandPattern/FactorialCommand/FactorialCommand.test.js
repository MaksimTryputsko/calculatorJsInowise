import { FactorialCommand } from './FactorialCommand';

describe('Factorial command tests', () => {
  test('Should execute command with right answer', () => {
    const factorialCommand = new FactorialCommand(5);
    expect(factorialCommand.execute()).toBe(120);
  });
  test('Should redo command with right answer', () => {
    const factorialCommand = new FactorialCommand(8);
    factorialCommand.execute();
    expect(factorialCommand.redo()).toBe(8);
  });
});
