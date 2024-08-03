import { useState, ChangeEvent, MouseEvent, useRef, useEffect } from 'react';
import Input from '../input/Input';
import Category from './Category';
import { useDelete } from '@/pages/hooks/useDelete';

export default function Diet() {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);
  const [hasItem, setHasItem] = useState(0);
  const countRef = useRef(1);
  const { handleDeleteClick } = useDelete(id, todo, setTodo);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleValueClick = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    const selected = target.getAttribute('data-value');
    if (!selected) return;
    const todoList = { id: id, text: value, category: selected };

    setSelectedValue(selected);
    setId(countRef.current++);
    setValue('');
    setTodo((prev) => [...prev, todoList]);
  };

  const handleCategoryClick = (id: string) => {
    setSelectedValue(id);
  };

  useEffect(() => {
    const itemLength = todo.filter((item) => item.category === selectedValue).length;
    setHasItem(itemLength);
  }, [todo, selectedValue]);

  return (
    <>
      <Input
        type='dropdown'
        value={value}
        selectedValue={selectedValue}
        onChange={handleValueChange}
        onClick={handleValueClick}
      />
      {selectedValue && (
        <Category
          selectedValue={selectedValue}
          todo={todo}
          hasItem={hasItem}
          handleCategoryClick={handleCategoryClick}
          handleDeleteClick={handleDeleteClick}
        />
      )}
    </>
  );
}
