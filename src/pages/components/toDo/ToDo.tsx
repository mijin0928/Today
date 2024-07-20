import { ChangeEvent, useState, useRef } from 'react';
import Input from '../input/Input';
import { Todo } from '@/type/type';
import ToDoItem from './ToDoItem';

export default function ToDo() {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState<Todo[]>([]);
  const [hasValue, setHasValue] = useState(false);
  const [id, setId] = useState(0);
  const countRef = useRef(1);
  const todoList = { id: id, text: value, isChecked: false };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddClick = () => {
    setId(countRef.current++);
    setTodo([...todo, todoList]);
    setValue('');
    setHasValue(true);
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddClick();
    }
  };

  const handleDeleteClick = (id: number) => {
    const updateTodo = todo.filter((item) => item.id !== id);
    setTodo(updateTodo);
  };

  const handleCheckChange = (id: number) => {
    setTodo((prevTodo) => prevTodo.map((todo) => (todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo)));
  };

  return (
    <>
      <Input
        type='button'
        value={value}
        onClick={handleAddClick}
        onChange={handleValueChange}
        onKeyDown={handleEnterKeyDown}
      />
      {hasValue && <ToDoItem todo={todo} handleDeleteClick={handleDeleteClick} handleCheckChange={handleCheckChange} />}
    </>
  );
}
