import { ChangeSignCommand } from './ChangeSIgnCommand';

describe('Change sing command tests', () => {
  const changeSignCommand = new ChangeSignCommand(2);
  test('Should execute command with right answer', () => {
    expect(changeSignCommand.execute()).toBe(-2);
  }),
    test('Should redo command with right answer', () => {
      expect(changeSignCommand.redo()).toBe(2);
    });
});
