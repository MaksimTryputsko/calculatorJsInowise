import { MultiplyCommand } from './MultiplyCommand';

test('Test for multiply operation', () => {
  expect(new MultiplyCommand(20, 10).execute()).toBe(200);
});

test('Test for return multiply operation', () => {
  expect(new MultiplyCommand(20, 10).redo(200)).toBe(20);
});
