export class MathRootCommand {
  constructor(firstOperand, secondOperand) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  }

  execute() {
    return Math.pow(+this.firstOperand, 1 / +this.secondOperand);
  }

  redo(value) {
    return Math.pow(value, this.secondOperand);
  }
}
