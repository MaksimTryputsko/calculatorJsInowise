import { NUMBER_FROM_LOCAL_STORAGE } from '../../constants';

export class MemoryReadCommand {
  constructor(operand) {
    this.operand = parseFloat(operand);
    this.result;
  }

  execute() {
    this.result = localStorage.getItem(NUMBER_FROM_LOCAL_STORAGE);
    return this.result ? this.result : 0;
  }

  redo() {
    return this.operand;
  }
}
