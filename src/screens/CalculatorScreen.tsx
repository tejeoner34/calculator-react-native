import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {CalculatorButton} from '../components/CalculatorButton';
import {ActionMap, OperationsMap} from '../interfaces/Interfaces';
import {BUTTONS_LIST, OPERATIONS_MAP} from '../constants/constants';

export const CalculatorScreen = () => {
  const [result, setResult] = useState('100');
  const [lastValue, setlastValue] = useState('');

  const lastOperation = useRef<string>();

  const handleOperation = (content: string) => {
    setResult(OPERATIONS_MAP[content as keyof OperationsMap](result, lastValue));
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

  return (
    <View style={styles.calculatorWrapper}>
      {Number(lastValue) !== 0 && (
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.smallNumber}>
          {lastValue}
        </Text>
      )}
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.result}>
        {result}
      </Text>
      <View>
        {BUTTONS_LIST.map(row => (
          <View style={styles.buttonsRow}>
            {row.map(({content, color, large, type}) => (
              <CalculatorButton
                action={ACTIONS_MAP[type as keyof ActionMap]}
                content={content}
                color={color}
                key={content}
                large={large}
                type={type}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
