import { MemoryReadCommand } from './MemoryReadCommand';

test('Test for memory read operation', () => {
  expect(new MemoryReadCommand(44).execute()).toBe(
    localStorage.getItem('number'),
  );
});

test('Test for return memory read operation', () => {
  expect(new MemoryReadCommand(20).redo()).toBe(20);
});
