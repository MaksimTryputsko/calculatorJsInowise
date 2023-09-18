import { MinusCommand } from './MinusCommand';

test('Test for minus operation', () => {
  expect(new MinusCommand(20, 12).execute()).toBe(8);
});

test('Test for return minus operation', () => {
  expect(new MinusCommand(20, 12).redo(8)).toBe(20);
});
