import { NUMBER_FROM_LOCAL_STORAGE } from '../../constants';

export class MemoryCalculate {
  constructor(firstOperand, operator) {
    this.firstOperand = parseFloat(firstOperand);
    this.operator = operator;
  }

  execute() {
    if (this.operator === '+') {
      if (!localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE)) {
        localStorage.setItem(NUMBER_FROM_LOCAL_STORAGE, this.firstOperand);
        return this.firstOperand;
      }
      localStorage.setItem(
        'number',
        parseFloat(localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE)) +
          this.firstOperand,
      );
      return this.firstOperand;
    } else {
      localStorage.setItem(
        'number',
        parseFloat(localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE)) -
          this.firstOperand,
      );
      return this.firstOperand;
    }
  }

  redo() {
    return this.firstOperand;
  }
}
