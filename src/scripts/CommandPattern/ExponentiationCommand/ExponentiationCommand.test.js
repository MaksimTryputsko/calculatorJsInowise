import { ExponentiationCommand } from './ExponentiationCommand';

describe('Exponentiation command tests', () => {
  test('Should execute command with right answer', () => {
    const exponentiationCommand = new ExponentiationCommand(2, 4);
    expect(exponentiationCommand.execute()).toBe(16);
  });
  test('Should redo command with right answer', () => {
    const exponentiationCommand = new ExponentiationCommand(300, 2);
    exponentiationCommand.execute();
    expect(exponentiationCommand.redo()).toBe(300);
  });
});
