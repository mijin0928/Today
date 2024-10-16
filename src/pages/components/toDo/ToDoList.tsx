import { ChangeEvent, useState } from 'react';
import { Todo } from '@/type/type';
import { useDelete } from '@/pages/hooks/useDelete';
import Input from '../input/Input';
import ToDoItem from './ToDoItem';
import { useId } from '@/pages/hooks/useId';

export default function ToDoList() {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState<Todo[]>([]);
  const [hasValue, setHasValue] = useState(false);
  const { id, onId } = useId();
  const { handleDeleteClick } = useDelete(todo, setTodo);
  const todoList = { id: id, text: value, isChecked: false };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddClick = () => {
    setTodo([...todo, todoList]);
    setValue('');
    setHasValue(true);
    onId();
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && value) {
      handleAddClick();
    }
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
      <ToDoItem
        todo={todo}
        handleDeleteClick={handleDeleteClick}
        handleCheckChange={handleCheckChange}
        hasValue={hasValue}
      />
    </>
  );
}
