import { useState } from "react";

export const useCounter = (
  initialValue: number = 10,
  options?: {
    factor?: number;
    minValue?: number;
    maxValue?: number;
  }
) => {
  const [counter, setCounter] = useState(initialValue);
  const { factor = 1, minValue = 0, maxValue = 0 } = options || {};

  const increment = (value: number = factor) =>
    maxValue
      ? counter + value <= maxValue && setCounter(counter + value)
      : setCounter(counter + value);

  const decrement = (value: number = factor) =>
    counter - value >= minValue && setCounter(counter - value);

  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
