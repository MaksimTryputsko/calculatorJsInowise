import { MemoryCalculate } from './MemoryCalculateCommand';

describe('Memory calculate command tests', () => {
  const mathRootCommandPlus = new MemoryCalculate(20, '+');
  test('Should execute command with right answer', () => {
    expect(mathRootCommandPlus.execute()).toBe(20);
  }),
    test('Should redo command with right answer', () => {
      expect(mathRootCommandPlus.redo()).toBe(20);
    });
});

describe('Memory calculate command tests', () => {
  const mathRootCommandMinus = new MemoryCalculate(25, '-');
  test('Should execute command with right answer', () => {
    expect(mathRootCommandMinus.execute()).toBe(25);
  }),
    test('Should redo command with right answer', () => {
      expect(mathRootCommandMinus.redo()).toBe(25);
    });
});
