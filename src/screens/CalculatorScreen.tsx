import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {CalculatorButton} from '../components/CalculatorButton';
import {ButtonProps} from '../interfaces/Interfaces';

const buttons: ButtonProps[][] = [
  [
    {
      content: 'C',
      color: 'gainsboro',
    },
    {
      content: '+/-',
      color: 'gainsboro',
    },
    {
      content: '%',
      color: 'gainsboro',
    },
    {
      content: '/',
      color: 'orange',
    },
  ],
  [
    {
      content: '7',
      color: 'dimgray',
    },
    {
      content: '8',
      color: 'dimgray',
    },
    {
      content: '9',
      color: 'dimgray',
    },
    {
      content: 'X',
      color: 'orange',
    },
  ],
  [
    {
      content: '4',
      color: 'dimgray',
    },
    {
      content: '5',
      color: 'dimgray',
    },
    {
      content: '6',
      color: 'dimgray',
    },
    {
      content: '-',
      color: 'orange',
    },
  ],
  [
    {
      content: '1',
      color: 'dimgray',
    },
    {
      content: '2',
      color: 'dimgray',
    },
    {
      content: '3',
      color: 'dimgray',
    },
    {
      content: '+',
      color: 'orange',
    },
  ],
  [
    {
      content: '0',
      color: 'dimgray',
      large: true,
    },
    {
      content: '.',
      color: 'dimgray',
    },
    {
      content: '=',
      color: 'orange',
    },
  ],
];

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorWrapper}>
      <Text style={styles.result}>10,700.50</Text>
      <View>
        {buttons.map(row => (
          <View style={styles.buttonsRow}>
            {row.map(({content, color, large}) => (
              <CalculatorButton content={content} color={color} large={large} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
