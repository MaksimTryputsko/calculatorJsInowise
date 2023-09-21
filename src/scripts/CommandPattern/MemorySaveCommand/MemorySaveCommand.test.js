import { MemorySaveCommand } from './MemorySaveCommand';

describe('Memory save command tests', () => {
  const memorySaveCommand = new MemorySaveCommand(154);
  test('Should execute command with right answer', () => {
    expect(memorySaveCommand.execute()).toBe(154);
  }),
    test('Should redo command with right answer', () => {
      expect(memorySaveCommand.redo()).toBe(154);
    });
});
