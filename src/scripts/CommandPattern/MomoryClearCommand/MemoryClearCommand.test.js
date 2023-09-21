import { MemoryClearCommand } from './MemoryClearCommand';
import { NUMBER_FROM_LOCAL_STORAGE } from '../../constants';

describe('Memory clear command tests', () => {
  const memoryClearCommand = new MemoryClearCommand(20);
  test('Should execute command with right answer', () => {
    expect(memoryClearCommand.execute()).toBe(20);
  }),
    test('Should redo command with right answer', () => {
      expect(memoryClearCommand.redo()).toBe(
        localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE),
      );
    });
});
