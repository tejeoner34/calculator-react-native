export interface ButtonProps {
    content: string;
    color: 'dimgray'|'orange'|'gainsboro';
    large?: boolean;
    action?: (content: string) => void;
    type: string;
  }

export interface ActionMap {
  'operation': (content: string) => void;
  'reset': () => void;
  'addNumber': (content: string) => void;
}

export interface OperationsMap {
  '+/-': () => void;
  '%': () => void;
}