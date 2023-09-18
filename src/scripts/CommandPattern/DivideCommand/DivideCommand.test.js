import { DivideCommand } from './DivideCommand';

test('Test for divide operation', () => {
  expect(new DivideCommand(5, 2).execute()).toBe(2.5);
});

test('Test for return divide operation', () => {
  expect(new DivideCommand(5, 2).redo(2.5)).toBe(5);
});
