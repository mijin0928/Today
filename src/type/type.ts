import { ChangeEvent, KeyboardEvent, MouseEvent, SetStateAction } from 'react';
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
  text?: string;
  isChecked?: boolean;
}
export interface ToDoProps<T> {
  todo: T;
  idx?: number;
  hasValue?: boolean;
  handleDeleteClick?: (id: number) => void;
  handleCheckChange?: (id: number) => void;
}
export interface DietItems {
  id: number;
  text: string;
  category: string;
}
export interface DietProps {
  selectedValue: string;
  diet: DietItems[];
  hasItem: number;
  handleCategoryClick?: (id: string) => void;
  handleDeleteClick: (id: number) => void;
}

export interface DeleteProps {
  id: number;
  handleDeleteClick: (id: number) => void;
}

export interface Delete {
  id: number;
  todo: string[];
  setTodo: SetStateAction<string>
}