import { computation, buttonsNumbers } from '../buttons';
import { ExponentiationCommand } from '../CommandPattern/ExponentiationCommand/ExponentiationCommand';
import { MathRootCommand } from '../CommandPattern/MarhRootCommand/MathRootCommand';
import { calculator } from '../calculator';
import { POWER_OF_NUMBER, ROOT_OF_NUMBER } from '../constants';

export const count = {
  value: 0,
  nameOperation: '',
};

export const calculationWithXandY = () => {
  const firstOperand = computation.innerHTML.substring(0, count.value.length);
  const secondOperand = computation.innerHTML.substring(
    count.value.length,
    computation.innerHTML.length,
  );
  if (count.nameOperation === POWER_OF_NUMBER) {
    calculator.setCommand(
      new ExponentiationCommand(firstOperand, secondOperand),
    );
    calculator.executeCommand();
  }
  if (count.nameOperation === ROOT_OF_NUMBER) {
    calculator.setCommand(new MathRootCommand(firstOperand, secondOperand));
    calculator.executeCommand();
  }

  buttonsNumbers.forEach(el => {
    el.removeEventListener('click', calculationWithXandY);
    count.value = 0;
    count.nameOperation = '';
  });
};
