import { NUMBER_FROM_LOCAL_STORAGE } from '../../constants';

export class MemorySaveCommand {
  constructor(operand) {
    this.operand = operand;
  }

  execute() {
    localStorage.setItem(NUMBER_FROM_LOCAL_STORAGE, this.operand);
    return this.operand;
  }

  redo() {
    return this.operand;
  }
}
