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
    parseFloat(getOperands[0]),
    parseFloat(getOperands[1]),
  );
};
