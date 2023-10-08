export class RemoveComputation {
  constructor(computation) {
    this.computation = computation;
  }

  execute() {
    return 0;
  }

  redo() {
    return this.computation;
  }
}
