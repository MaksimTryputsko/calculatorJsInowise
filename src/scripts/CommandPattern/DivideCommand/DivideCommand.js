export class DivideCommand {
  constructor(firstAddend, secondAddend) {
    this.firstAddend = parseFloat(firstAddend);
    this.secondAddend = parseFloat(secondAddend);
    this.result;
  }

  execute() {
    this.result = this.firstAddend / this.secondAddend;
    return this.result === Infinity ? 0 : this.result;
  }

  redo() {
    return this.result * this.secondAddend;
  }
}
