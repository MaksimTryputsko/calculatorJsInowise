import './styles.css';
import './toggleTheme/styles.css';

import { calculator } from './scripts/calculator';
import { RemoveComputation } from './scripts/CommandPattern/RemoveComputation/RemoveComputation';
import {
  memorySaveButton,
  memoryReadButton,
  memoryClearButton,
  memoryPlusButton,
  memoryMinusButton,
  buttonsNumbers,
  buttonRemove,
  buttonAnswer,
  basicOperationButton,
  pointButton,
  changeSignButton,
  squareButton,
  cubedButton,
  percentButton,
  toPowersOfXButton,
  xToPowerOfYButton,
  computation,
  mathSquareRootButton,
  mathCubeRootButton,
  xToRootOfYButton,
  fractionButton,
  factorialButton,
} from './scripts/buttons';
import { ChangeSignCommand } from './scripts/CommandPattern/ChangeSignCommand/ChangeSIgnCommand';
import { PercentCommand } from './scripts/CommandPattern/PercentCommand/PercentCommand';
import { MemorySaveCommand } from './scripts/CommandPattern/MemorySaveCommand/MemorySaveCommand';
import { MemoryClearCommand } from './scripts/CommandPattern/MomoryClearCommand/MemoryClearCommand';
import { MemoryReadCommand } from './scripts/CommandPattern/MemoryReadCommand/MemoryReadCommand';
import { MemoryCalculate } from './scripts/CommandPattern/MemoryCalculateCommand/MemoryCalculateCommand';
import { ExponentiationCommand } from './scripts/CommandPattern/ExponentiationCommand/ExponentiationCommand';
import { MathRootCommand } from './scripts/CommandPattern/MarhRootCommand/MathRootCommand';
import { DivideCommand } from './scripts/CommandPattern/DivideCommand/DivideCommand';
import { FactorialCommand } from './scripts/CommandPattern/FactorialCommand/FactorialCommand';
import { setComputation } from './scripts/functions/setComputation';
import { checkOperator } from './scripts/functions/checkOperator';
import {
  calculationWithXandY,
  count,
} from './scripts/functions/calculationWithXandY';
import { toggleTheme } from './toggleTheme/toggleTheme';

toggleTheme();

buttonRemove.addEventListener('click', () => {
  calculator.setCommand(new RemoveComputation(computation.innerHTML));
  calculator.executeCommand();
});

buttonAnswer.addEventListener('click', () => {
  setComputation();
});

buttonsNumbers.forEach(button => {
  button.addEventListener('click', () => {
    basicOperationButton.forEach(button => {
      button.disabled = false;
    });
    if (
      computation.innerHTML[0] === '0' &&
      computation.innerHTML.length === 1
    ) {
      return (computation.innerHTML = button.innerHTML);
    }
    computation.innerHTML += button.innerHTML;
  });
});

basicOperationButton.forEach(button =>
  button.addEventListener('click', () => {
    basicOperationButton.forEach(button => {
      button.disabled = true;
    });
    checkOperator();
    pointButton.disabled = false;
    computation.innerHTML += button.innerHTML;
  }),
);

pointButton.addEventListener('click', () => {
  computation.innerHTML += pointButton.innerHTML;
  pointButton.disabled = true;
});

changeSignButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new ChangeSignCommand(computation.innerHTML)),
    calculator.executeCommand();
});

squareButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new ExponentiationCommand(computation.innerHTML, 2));
  calculator.executeCommand();
});

cubedButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new ExponentiationCommand(computation.innerHTML, 3));
  calculator.executeCommand();
});

toPowersOfXButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new ExponentiationCommand(10, computation.innerHTML));
  calculator.executeCommand();
});

percentButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new PercentCommand(computation.innerHTML)),
    calculator.executeCommand();
});

memorySaveButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new MemorySaveCommand(computation.innerHTML)),
    calculator.executeCommand();
});

memoryClearButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new MemoryClearCommand(computation.innerHTML)),
    calculator.executeCommand();
});

memoryReadButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new MemoryReadCommand(computation.innerHTML));
  calculator.executeCommand();
});

memoryPlusButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new MemoryCalculate(computation.innerHTML, '+'));
  calculator.executeCommand();
});
memoryMinusButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new MemoryCalculate(computation.innerHTML, '-'));
  calculator.executeCommand();
});

xToPowerOfYButton.addEventListener('click', () => {
  checkOperator();
  buttonsNumbers.forEach(el => {
    el.addEventListener('click', calculationWithXandY);
  });
  count.value = computation.innerHTML;
  count.nameOperation = 'powerOfNumber';
});

mathSquareRootButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new MathRootCommand(computation.innerHTML, 2));
  calculator.executeCommand();
});

mathCubeRootButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new MathRootCommand(computation.innerHTML, 3));
  calculator.executeCommand();
});

xToRootOfYButton.addEventListener('click', () => {
  checkOperator();
  buttonsNumbers.forEach(el => {
    el.addEventListener('click', calculationWithXandY);
  });

  count.value = computation.innerHTML;
  count.nameOperation = 'rootOfNumber';
});

fractionButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new DivideCommand(1, computation.innerHTML)),
    calculator.executeCommand();
});

factorialButton.addEventListener('click', () => {
  checkOperator();
  calculator.setCommand(new FactorialCommand(computation.innerHTML)),
    calculator.executeCommand();
});
