export class DivideCommand {
  constructor(firstAddend, secondAddend) {
    this.firstAddend = firstAddend;
    this.secondAddend = secondAddend;
  }

  execute() {
    const result = this.firstAddend / this.secondAddend;
    return result === Infinity ? 0 : result;
  }

  redo(value) {
    return value * this.secondAddend;
  }
}
