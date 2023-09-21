import { returnFactorial, setFactorial } from '../../functions/factorial';

export class FactorialCommand {
  constructor(operand) {
    this.operand = parseFloat(operand);
    this.result;
  }

  execute() {
    this.result = setFactorial(this.operand);
    return this.result;
  }

  redo() {
    return returnFactorial(this.result);
  }
}
