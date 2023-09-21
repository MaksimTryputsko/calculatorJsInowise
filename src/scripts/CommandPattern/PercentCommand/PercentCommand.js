export class PercentCommand {
  constructor(operand) {
    this.operand = parseFloat(operand);
    this.result;
  }

  execute() {
    this.result = this.operand / 100;
    return this.result;
  }

  redo() {
    return this.result * 100;
  }
}
