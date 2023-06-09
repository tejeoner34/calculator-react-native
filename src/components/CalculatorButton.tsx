import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../interfaces/Interfaces';

export const CalculatorButton = ({content, color, large, action, type}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={() =>action(content, type)} style={[large && styles.largeButton]}>
      <View
        style={[
          styles.buttonWrapper,
          {backgroundColor: color}
        ]}>
        <Text
          style={[
            styles.buttonText,
            {color: color === 'gainsboro' ? 'black' : 'white'},
          ]}>
          {content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    minWidth: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  largeButton: {
    flex: 3.2 / 4,
  },
});
