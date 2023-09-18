import { PlusCommand } from './PlusCommand';

test('Test for plus operation', () => {
  expect(new PlusCommand(1, 2).execute()).toBe(3);
});

test('Test for plus operation', () => {
  expect(new PlusCommand(1, 2).redo(3)).toBe(1);
});
