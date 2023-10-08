export const setFactorial = num => {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};
export const returnFactorial = num => {
  for (let i = 1; i <= num - 1; i++) {
    num /= i;
  }
  return num;
};
