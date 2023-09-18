export class MemoryClearCommand {
  constructor(operand) {
    this.operand = operand;
    this.valueFromLocalStorage = localStorage.getItem('number');
  }

  execute() {
    localStorage.removeItem('number');
    return this.operand;
  }

  redo() {
    return this.valueFromLocalStorage;
  }
}
