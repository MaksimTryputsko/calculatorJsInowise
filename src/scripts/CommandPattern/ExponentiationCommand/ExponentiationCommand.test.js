import { ExponentiationCommand } from './ExponentiationCommand';

describe('Exponentiation command tests', () => {
  const exponentiationCommand = new ExponentiationCommand(2, 4);
  test('Should execute command with right answer', () => {
    expect(exponentiationCommand.execute()).toBe(16);
  }),
    test('Should redo command with right answer', () => {
      expect(exponentiationCommand.redo()).toBe(2);
    });
});
