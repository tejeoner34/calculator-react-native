import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
  },
  calculatorWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  buttonsRow: {
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  result: {
    alignSelf: 'flex-end',
    fontSize: 60,
    color: 'white',
  },
});
