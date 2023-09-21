import { PlusCommand } from './PlusCommand';

describe('Plus command tests', () => {
  const plusCommand = new PlusCommand(1, 2);
  test('Should execute command with right answer', () => {
    expect(plusCommand.execute()).toBe(3);
  }),
    test('Should redo command with right answer', () => {
      expect(plusCommand.redo()).toBe(1);
    });
});
