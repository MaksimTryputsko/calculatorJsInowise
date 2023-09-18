export class ExponentiationCommand {
  constructor(operand, power) {
    this.operand = operand;
    this.power = power;
  }

  execute() {
    return Math.pow(+this.operand, this.power);
  }

  redo(value) {
    return Math.pow(value, 1 / this.power);
  }
}
