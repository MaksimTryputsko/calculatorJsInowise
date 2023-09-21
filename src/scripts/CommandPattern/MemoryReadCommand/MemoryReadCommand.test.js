import { NUMBER_FROM_LOCAL_STORAGE } from '../../constants';
import { MemoryReadCommand } from './MemoryReadCommand';

describe('Memory read command tests', () => {
  const memoryReadCommand = new MemoryReadCommand(44);
  test('Should execute command with right answer', () => {
    expect(memoryReadCommand.execute()).toBe(
      localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE) | 0,
    );
  }),
    test('Should execute command with right answer', () => {
      expect(new MemoryReadCommand(undefined).execute()).toBe(0);
    });
  test('Should redo command with right answer', () => {
    expect(memoryReadCommand.redo()).toBe(44);
  });
});
