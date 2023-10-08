export class ChangeSignCommand {
  constructor(operand) {
    this.operand = parseFloat(operand);
  }

  execute() {
    if (this.operand === 0) {
      return '-';
    }
    return -this.operand;
  }

  redo() {
    return this.operand;
  }
}
