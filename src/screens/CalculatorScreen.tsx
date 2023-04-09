import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {CalculatorButton} from '../components/CalculatorButton';
import {ActionMap} from '../interfaces/Interfaces';
import {BUTTONS_LIST} from '../constants/constants';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {lastValue, result, ACTIONS_MAP} = useCalculator();

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
