import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {CalculatorButton} from '../components/CalculatorButton';
import {ActionMap, OperationsMap} from '../interfaces/Interfaces';
import {BUTTONS_LIST} from '../constants/constants';

export const CalculatorScreen = () => {
  const [result, setResult] = useState('100');

  const changePositive = () => {
    const isNegative = result.includes('-');
    isNegative ? setResult(result.replace('-', '')) : setResult('-' + result);
  };

  const handleOperation = (content: string) => {
    OPERATIONS_MAP[content as keyof OperationsMap]();
  };

  const handlePercentage = () => {
    setResult(String(Number(result) / 100));
  };

  const handleReset = () => {
    setResult('0');
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

  const ACTIONS_MAP: ActionMap = {
    operation: handleOperation,
    addNumber: handleNumber,
    reset: handleReset,
  };

  const OPERATIONS_MAP: OperationsMap = {
    '+/-': changePositive,
    '%': handlePercentage,
  };
  return (
    <View style={styles.calculatorWrapper}>
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
