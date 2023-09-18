import { computation, buttonsNumbers } from '../buttons';
import { ExponentiationCommand } from '../CommandPattern/ExponentiationCommand/ExponentiationCommand';
import { MathRootCommand } from '../CommandPattern/MarhRootCommand/MathRootCommand';
import { calculator } from '../calculator';

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
  if (count.nameOperation === 'powerOfNumber') {
    calculator.setCommand(
      new ExponentiationCommand(firstOperand, secondOperand),
    );
    calculator.executeCommand();
  }
  if (count.nameOperation === 'rootOfNumber') {
    calculator.setCommand(new MathRootCommand(firstOperand, secondOperand));
    calculator.executeCommand();
  }

  buttonsNumbers.forEach(el => {
    el.removeEventListener('click', calculationWithXandY);
    count.value = 0;
    count.nameOperation = '';
  });
};
