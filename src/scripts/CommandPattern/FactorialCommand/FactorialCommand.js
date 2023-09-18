import { returnFactorial, setFactorial } from '../../functions/factorial';

export class FactorialCommand {
  constructor(operand) {
    this.operand = operand;
  }

  execute() {
    return setFactorial(this.operand);
  }

  redo(value) {
    return returnFactorial(value);
  }
}
