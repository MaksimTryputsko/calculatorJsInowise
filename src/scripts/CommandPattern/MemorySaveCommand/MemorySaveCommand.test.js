import { MemorySaveCommand } from './MemorySaveCommand';

describe('Memory save command tests', () => {
  test('Should execute command with right answer', () => {
    const memorySaveCommand = new MemorySaveCommand(154);
    expect(memorySaveCommand.execute()).toBe(154);
  });
  test('Should redo command with right answer', () => {
    const memorySaveCommand = new MemorySaveCommand(77);
    memorySaveCommand.execute();
    expect(memorySaveCommand.redo()).toBe(77);
  });
});
