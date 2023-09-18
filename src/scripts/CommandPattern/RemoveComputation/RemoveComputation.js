export class RemoveComputation {
  constructor(computation) {
    this.computation = computation;
  }

  execute() {
    return 0;
  }

  redo(value) {
    return value;
  }
}
