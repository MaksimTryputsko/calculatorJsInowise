export class MemoryCalculate {
  constructor(firstOperand, operator) {
    this.firstOperand = firstOperand;
    this.operator = operator;
  }

  execute() {
    if (this.operator === '+') {
      localStorage.setItem(
        'number',
        +localStorage.getItem('number') + +this.firstOperand,
      );
      return this.firstOperand;
    } else {
      localStorage.setItem(
        'number',
        +localStorage.getItem('number') - +this.firstOperand,
      );
      return this.firstOperand;
    }
  }

  redo() {
    return this.firstOperand;
  }
}
