import { calculator } from '../calculator';
import { PlusCommand } from '../CommandPattern/PlusCommand/PlusCommand';
import { DivideCommand } from '../CommandPattern/DivideCommand/DivideCommand';
import { MinusCommand } from '../CommandPattern/MinusCommand/MinusCommand';
import { MultiplyCommand } from '../CommandPattern/MultiplyCommand/MultiplyCommand';

export const setAnswerWithSimpleMathematicalOperators = (
  operator,
  firstOperand,
  secondOperand,
) => {
  switch (operator) {
    case '+':
      return (
        calculator.setCommand(new PlusCommand(firstOperand, secondOperand)),
        calculator.executeCommand()
      );
    case '-':
      return (
        calculator.setCommand(new MinusCommand(firstOperand, secondOperand)),
        calculator.executeCommand()
      );
    case '×':
      return (
        calculator.setCommand(new MultiplyCommand(firstOperand, secondOperand)),
        calculator.executeCommand()
      );
    case '÷':
      return (
        calculator.setCommand(new DivideCommand(firstOperand, secondOperand)),
        calculator.executeCommand()
      );
  }
};
