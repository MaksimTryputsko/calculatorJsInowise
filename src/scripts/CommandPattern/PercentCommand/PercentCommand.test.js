import { PercentCommand } from './PercentCommand';

test('Test for percent operation', () => {
  expect(new PercentCommand(5).execute()).toBe(0.05);
});

test('Test for return percent operation', () => {
  expect(new PercentCommand(5).redo(0.05)).toBe(5);
});
