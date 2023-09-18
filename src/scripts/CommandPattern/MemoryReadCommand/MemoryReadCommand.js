export class MemoryReadCommand {
  constructor(operand) {
    this.operand = operand;
  }

  execute() {
    return localStorage.getItem('number');
  }

  redo() {
    return this.operand;
  }
}
