import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
export interface Item {
  id: string;
  result: string;
}
export interface InputProps {
  type?: 'button' | 'dropdown';
  value?: string;
  selectedValue?: string;
  onClick: (() => void) | ((e: MouseEvent<HTMLUListElement>) => void);
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
}
export interface Todo {
  id: number;
  text: string;
  isChecked: boolean;
}
