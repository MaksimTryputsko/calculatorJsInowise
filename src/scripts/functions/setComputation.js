import { computation } from '../buttons';
import { setAnswerWithSimpleMathematicalOperators } from './setAnswerWithSimpleMathematicalOperators';

export const operators = ['+', '×', '÷', '-'];

export const setComputation = () => {
  const getOperator = operators.find(el =>
    [...computation.innerHTML].includes(el),
  );
  const getOperands = computation.innerHTML.split(getOperator);
  setAnswerWithSimpleMathematicalOperators(
    getOperator,
    +getOperands[0],
    +getOperands[1],
  );
};
