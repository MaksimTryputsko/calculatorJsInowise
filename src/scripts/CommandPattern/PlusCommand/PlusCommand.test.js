import { PlusCommand } from './PlusCommand';

describe('Plus command tests', () => {
  test('Should execute command with right answer', () => {
    const plusCommand = new PlusCommand(1, 2);
    expect(plusCommand.execute()).toBe(3);
  });
  test('Should redo command with right answer', () => {
    const plusCommand = new PlusCommand(4, 2);
    plusCommand.execute();
    expect(plusCommand.redo()).toBe(4);
  });
});
