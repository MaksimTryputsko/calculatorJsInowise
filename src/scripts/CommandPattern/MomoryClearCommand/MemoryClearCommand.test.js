import { MemoryClearCommand } from './MemoryClearCommand';
import { NUMBER_FROM_LOCAL_STORAGE } from '../../constants';

describe('Memory clear command tests', () => {
  test('Should execute command with right answer', () => {
    const memoryClearCommand = new MemoryClearCommand(20);
    expect(memoryClearCommand.execute()).toBe(20);
  });
  test('Should redo command with right answer', () => {
    const memoryClearCommand = new MemoryClearCommand(99);
    memoryClearCommand.execute();
    expect(memoryClearCommand.redo()).toBe(
      localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE),
    );
  });
});
