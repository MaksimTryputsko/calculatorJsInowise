import { ExponentiationCommand } from './ExponentiationCommand';

test('Test for exponentiation operation', () => {
  expect(new ExponentiationCommand(2, 4).execute()).toBe(16);
});

test('Test for return exponentiation operation', () => {
  expect(new ExponentiationCommand(2, 4).redo(16)).toBe(2);
});
