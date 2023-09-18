export class MultiplyCommand {
  constructor(firstOperand, secondOperand) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  }

  execute() {
    return this.firstOperand * this.secondOperand;
  }

  redo(value) {
    return value / this.secondOperand;
  }
}
