import {ActionMap, ButtonProps} from '../interfaces/Interfaces';

export const BUTTONS_LIST: ButtonProps[][] = [
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
      content: '%',
      color: 'gainsboro',
      type: 'operation',
    },
    {
      content: '/',
      color: 'orange',
      type: 'operation',
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
      type: 'operation',
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
      type: 'operation',
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
      type: 'operation',
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
      type: 'operation',
    },
  ],
];
