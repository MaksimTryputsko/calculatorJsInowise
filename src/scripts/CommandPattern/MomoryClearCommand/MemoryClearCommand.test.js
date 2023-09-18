import { MemoryClearCommand } from './MemoryClearCommand';

test('Test for memory clear operation', () => {
  expect(new MemoryClearCommand(20).execute()).toBe(20);
});

test('Test for memory clear operation', () => {
  expect(new MemoryClearCommand(15).redo()).toBe(
    localStorage.getItem('number'),
  );
});
