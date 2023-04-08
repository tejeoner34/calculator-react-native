export const handleSum = (result: string, lastValue: string) => {
  const num1 = Number(result);
  const num2 = Number(lastValue);
  return String(num1 + num2);
};

export const handleSubstract = (result: string, lastValue: string) => {
  const num1 = Number(result);
  const num2 = Number(lastValue);
  return String(num2 - num1);
};

export const handleMultiply = (result: string, lastValue: string) => {
  const num1 = Number(result);
  const num2 = Number(lastValue);
  return String(num1 * num2);
};

export const handleDivide = (result: string, lastValue: string) => {
  const num1 = Number(result);
  const num2 = Number(lastValue);
  return String(num2 / num1);
};

export const changePositive = (result: string) => {
  const isNegative = result.includes('-');
  return isNegative ? result.replace('-', '') : '-' + result;
};
