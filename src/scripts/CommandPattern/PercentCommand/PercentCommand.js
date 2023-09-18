export class PercentCommand {
  constructor(operand) {
    this.operand = operand;
  }

  execute() {
    return this.operand / 100;
  }

  redo(value) {
    return value * 100;
  }
}
