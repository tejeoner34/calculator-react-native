import {useRef, useState} from 'react';
import {OPERATIONS_MAP} from '../constants/constants';
import {ActionMap, OperationsMap} from '../interfaces/Interfaces';

export const useCalculator = () => {
  const [result, setResult] = useState('100');
  const [lastValue, setlastValue] = useState('');

  const lastOperation = useRef<string>();

  const handleOperation = (content: string) => {
    setResult(
      OPERATIONS_MAP[content as keyof OperationsMap](result, lastValue),
    );
  };

  const handleReset = () => {
    setResult('0');
    setlastValue('0');
  };

  const handleDelete = () => {
    if (
      result.length === 1 ||
      (result.length === 2 && result.startsWith('-'))
    ) {
      setResult('0');
    } else {
      setResult(result.slice(0, -1));
    }
  };

  const handleNumber = (content: string) => {
    setResult(oldValue => {
      if (content === '.' && oldValue.includes('.')) return oldValue;
      if (oldValue === '0') {
        if (content === '.') return oldValue + content;
        return oldValue === '0' ? content : oldValue + content;
      }
      return oldValue + content;
    });
  };

  const handleAritmenticOperator = (operation: string) => {
    if (lastOperation.current) {
      setlastValue(
        OPERATIONS_MAP[lastOperation.current as keyof OperationsMap](
          result,
          lastValue,
        ),
      );
    } else {
      setlastValue(result);
    }
    setResult('0');
    lastOperation.current = operation;
  };

  const calculateResult = () => {
    setResult(
      OPERATIONS_MAP[lastOperation.current as keyof OperationsMap](
        result,
        lastValue,
      ),
    );
    setlastValue('0');
    lastOperation.current = undefined;
  };

  const ACTIONS_MAP: ActionMap = {
    addNumber: handleNumber,
    aritmetic: handleAritmenticOperator,
    calculate: calculateResult,
    deleteLast: handleDelete,
    operation: handleOperation,
    reset: handleReset,
  };

  return {
    lastValue,
    result,
    ACTIONS_MAP,
  };
};
