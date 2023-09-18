import { MemorySaveCommand } from './MemorySaveCommand';

test('Test for memory save operation', () => {
  expect(new MemorySaveCommand(154).execute()).toBe(154);
});

test('Test for return memory save operation', () => {
  expect(new MemorySaveCommand(20).redo(30)).toBe(30);
});
