import { BaseItem } from '@/type/type';
import { SetStateAction, Dispatch } from 'react';

export function useDelete<T extends BaseItem>(item: T[], setItem: Dispatch<SetStateAction<T[]>>) {
  const handleDeleteClick = (id: number) => {
    const updateItem = item.filter((item) => item.id !== id);
    setItem(updateItem);
  };

  return { handleDeleteClick };
}
