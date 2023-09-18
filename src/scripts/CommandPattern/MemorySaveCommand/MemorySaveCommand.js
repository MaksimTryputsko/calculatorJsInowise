export class MemorySaveCommand {
  constructor(operand) {
    this.operand = operand;
  }

  execute() {
    localStorage.setItem('number', this.operand);
    return this.operand;
  }

  redo(value) {
    return value;
  }
}
