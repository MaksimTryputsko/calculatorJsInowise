import { MemoryCalculate } from './MemoryCalculateCommand';

describe('Memory calculate command tests', () => {
  test('Should execute command with right answer', () => {
    const mathRootCommandPlus = new MemoryCalculate(20, '+');
    expect(mathRootCommandPlus.execute()).toBe(20);
  });
  test('Should redo command with right answer', () => {
    const mathRootCommandPlus = new MemoryCalculate(50, '+');
    mathRootCommandPlus.execute();
    expect(mathRootCommandPlus.redo()).toBe(50);
  });
});

describe('Memory calculate command tests', () => {
  test('Should execute command with right answer', () => {
    const mathRootCommandMinus = new MemoryCalculate(25, '-');
    expect(mathRootCommandMinus.execute()).toBe(25);
  });
  test('Should redo command with right answer', () => {
    const mathRootCommandMinus = new MemoryCalculate(80, '-');
    mathRootCommandMinus.execute();
    expect(mathRootCommandMinus.redo()).toBe(80);
  });
});
