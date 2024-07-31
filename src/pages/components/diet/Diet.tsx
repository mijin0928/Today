import { useState, ChangeEvent, MouseEvent, useRef, useEffect } from 'react';
import Input from '../input/Input';
import Tab from './Tab';

export default function Diet() {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);
  const countRef = useRef(1);

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

  return (
    <>
      <Input
        type='dropdown'
        value={value}
        selectedValue={selectedValue}
        onChange={handleValueChange}
        onClick={handleValueClick}
      />
      {selectedValue && <Tab selectedValue={selectedValue} todo={todo} />}
    </>
  );
}
