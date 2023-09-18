import { FactorialCommand } from './FactorialCommand';

test('Test for factorial operation', () => {
  expect(new FactorialCommand(5).execute()).toBe(120);
});

test('Test for return factorial operation', () => {
  expect(new FactorialCommand(5).redo(120)).toBe(5);
});
