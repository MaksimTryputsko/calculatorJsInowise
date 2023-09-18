import { RemoveComputation } from './RemoveComputation';

test('Test for remove computation', () => {
  expect(new RemoveComputation(20).execute()).toBe(0);
});

test('Test for remove computation', () => {
  expect(new RemoveComputation(30).redo(5)).toBe(5);
});
