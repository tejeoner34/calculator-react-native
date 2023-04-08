import { changePositive, handleDivide, handleMultiply, handleSubstract, handleSum } from '../helpers/helpers';
import {ButtonsList, OperationsMap} from '../interfaces/Interfaces';

export const OPERATIONS_MAP: OperationsMap = {
  '+/-': changePositive,
  '+': handleSum,
  '-': handleSubstract,
  '/': handleDivide,
  X: handleMultiply,
};

export const BUTTONS_LIST: ButtonsList[][] = [
  [
    {
      content: 'C',
      color: 'gainsboro',
      type: 'reset',
    },
    {
      content: '+/-',
      color: 'gainsboro',
      type: 'operation',
    },
    {
      content: 'del',
      color: 'gainsboro',
      type: 'deleteLast',
    },
    {
      content: '/',
      color: 'orange',
      type: 'aritmetic',
    },
  ],
  [
    {
      content: '7',
      color: 'dimgray',
      type: 'addNumber',
    },
    {
      content: '8',
      color: 'dimgray',
      type: 'addNumber',
    },
    {
      content: '9',
      color: 'dimgray',
      type: 'addNumber',
    },
    {
      content: 'X',
      color: 'orange',
      type: 'aritmetic',
    },
  ],
  [
    {
      content: '4',
      color: 'dimgray',
      type: 'addNumber',
    },
    {
      content: '5',
      color: 'dimgray',
      type: 'addNumber',
    },
    {
      content: '6',
      color: 'dimgray',
      type: 'addNumber',
    },
    {
      content: '-',
      color: 'orange',
      type: 'aritmetic',
    },
  ],
  [
    {
      content: '1',
      color: 'dimgray',
      type: 'addNumber',
    },
    {
      content: '2',
      color: 'dimgray',
      type: 'addNumber',
    },
    {
      content: '3',
      color: 'dimgray',
      type: 'addNumber',
    },
    {
      content: '+',
      color: 'orange',
      type: 'aritmetic',
    },
  ],
  [
    {
      content: '0',
      color: 'dimgray',
      large: true,
      type: 'addNumber',
    },
    {
      content: '.',
      color: 'dimgray',
      type: 'addNumber',
    },
    {
      content: '=',
      color: 'orange',
      type: 'calculate',
    },
  ],
];
