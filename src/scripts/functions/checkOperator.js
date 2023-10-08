import { operators, setComputation } from './setComputation';
import { computation } from '../buttons';

export const checkOperator = () => {
  if (operators.some(el => [...computation.innerHTML].includes(el))) {
    setComputation();
  }
};
