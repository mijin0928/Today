import { DietItems, Todo } from '@/type/type';
import { SetStateAction, Dispatch } from 'react';

export function useDelete(item, setItem) {
  const handleDeleteClick = (id: number) => {
    const updateTodo = item.filter((item) => item.id !== id);
    setItem(updateTodo);
  };

  return { handleDeleteClick };
}
