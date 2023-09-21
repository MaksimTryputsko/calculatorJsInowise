export class ExponentiationCommand {
  constructor(operand, power) {
    this.operand = parseFloat(operand);
    this.power = parseFloat(power);
    this.result;
  }

  execute() {
    this.result = Math.pow(this.operand, this.power);
    return this.result;
  }

  redo() {
    return Math.pow(this.result, 1 / this.power);
  }
}
