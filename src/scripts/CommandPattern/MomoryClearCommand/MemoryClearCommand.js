import { NUMBER_FROM_LOCAL_STORAGE } from '../../constants';

export class MemoryClearCommand {
  constructor(operand) {
    this.operand = parseFloat(operand);
    this.valueFromLocalStorage = localStorage.getItem(
      NUMBER_FROM_LOCAL_STORAGE,
    );
  }

  execute() {
    localStorage.removeItem(NUMBER_FROM_LOCAL_STORAGE);
    return this.operand;
  }

  redo() {
    return this.valueFromLocalStorage;
  }
}
