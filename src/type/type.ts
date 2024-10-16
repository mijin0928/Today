import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';

export interface PositionError {
  readonly code: number;
  readonly message: string;
}

export interface WeatherItem {
  id: string;
  src: string;
  data: string;
  alt: string;
  text: string;
}

export interface Item {
  id: string;
  result: string;
}
export interface InputProps {
  type?: 'button' | 'dropdown';
  value?: string;
  selectedValue?: string;
  onClick: (e?: MouseEvent<HTMLUListElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
}

export interface BaseItem {
  id: number;
}

export interface Todo {
  length?: number;
  id: number;
  text: string;
  isChecked: boolean;
}
export interface ToDoProps<T> {
  todo: T;
  idx?: number;
  hasValue?: boolean;
  handleDeleteClick?: (id: number) => void;
  handleCheckChange?: (id: number) => void;
}
export interface CountProps {
  todo?: {
    length?: number;
    isChecked?: boolean;
  }[];
  filterItem?: DietItems[];
}

export interface DietItems extends BaseItem {
  text: string;
  category: string;
  file: File | null;
  kcal: number;
  rating: number;
  review: string;
}

export interface UpdateItem {
  updateItem: (id: number, update: Partial<DietItems>) => void;
}

export interface DeleteProps extends BaseItem {
  handleDeleteClick: (id: number) => void;
}
export interface CategoryProps {
  selectedValue: string;
  handleCategoryClick: (id: string) => void;
}

export interface DietItemProps extends UpdateItem {
  itemLength: number;
  filterItem: DietItems[];
  handleDeleteClick: (id: number) => void;
}
export interface FileInputProps extends UpdateItem, BaseItem {
  file: File | null;
}

export interface KcalInputProps extends UpdateItem, BaseItem {
  text: string;
  kcal: number;
}

export interface RatingProps extends UpdateItem, BaseItem {
  rating: number;
  review: string;
}
