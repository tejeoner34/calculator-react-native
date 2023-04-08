export interface ButtonProps {
    content: string;
    color: 'dimgray'|'orange'|'gainsboro';
    large?: boolean;
    action: (content: string, type: string) => void;
    type: string;
  }

  export interface ButtonsList {
    content: string;
    color: 'dimgray'|'orange'|'gainsboro';
    large?: boolean;
    type: string;
  }

export interface ActionMap {
  'addNumber': (content: string) => void;
  'aritmetic': (content: string) => void;
  'calculate': (content: string) => void;
  'deleteLast': () => void;
  'operation': (content: string) => void;
  'reset': () => void;
}

export interface OperationsMap {
  '+/-': (value: string) => string;
  '+': (result: string, lastValue: string) => string;
  '-': (result: string, lastValue: string) => string;
  '/': (result: string, lastValue: string) => string;
  'X': (result: string, lastValue: string) => string;
}