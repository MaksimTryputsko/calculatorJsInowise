import { MathRootCommand } from './MathRootCommand';

test('Test for mathematical root operation', () => {
  expect(new MathRootCommand(25, 2).execute()).toBe(5);
});

test('Test for return mathematical root operation', () => {
  expect(new MathRootCommand(25, 2).redo(5)).toBe(25);
});
