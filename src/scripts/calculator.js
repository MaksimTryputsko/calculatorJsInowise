import { computation } from '../scripts/buttons';

class Calculator {
  constructor() {
    this.command = '';
    this.history = [];
  }

  setCommand(value) {
    this.command = value;
  }

  executeCommand() {
    const result = this.command.execute();
    if (result === Infinity) {
      this.history.push(0);
      return (computation.innerHTML = 0);
    }
    this.history.push(result);
    computation.innerHTML = result;
  }

  executeRedo() {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      return this.command.redo(lastCommand);
    }
  }
}

const calculator = new Calculator();

export { calculator };
