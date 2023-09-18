import { MemoryCalculate } from './MemoryCalculateCommand';

test('Test for memory plus calculate operation', () => {
  expect(new MemoryCalculate(20, '+').execute()).toBe(20);
});

test('Test for return memory plus calculate operation', () => {
  expect(new MemoryCalculate(20, '+').redo()).toBe(20);
});

test('Test for memory minus calculate operation', () => {
  expect(new MemoryCalculate(20, '+').execute()).toBe(20);
});

test('Test for return memory minus calculate operation', () => {
  expect(new MemoryCalculate(20, '+').redo()).toBe(20);
});
