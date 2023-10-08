import { NUMBER_FROM_LOCAL_STORAGE } from '../../constants';
import { MemoryReadCommand } from './MemoryReadCommand';

describe('Memory read command tests', () => {
  test('Should execute command with right answer', () => {
    const memoryReadCommand = new MemoryReadCommand(44);
    expect(memoryReadCommand.execute()).toBe(
      localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE) | 0,
    );
  });
  test('Should execute command with save undefined and answer 0', () => {
    const memoryReadCommand = new MemoryReadCommand(undefined);
    expect(memoryReadCommand.execute()).toBe(0);
  });
  test('Should redo command with right answer', () => {
    const memoryReadCommand = new MemoryReadCommand(88);
    memoryReadCommand.execute();
    expect(memoryReadCommand.redo()).toBe(88);
  });
});
