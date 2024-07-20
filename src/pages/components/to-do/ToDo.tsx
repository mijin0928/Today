import { ChangeEvent, useEffect, useState, useRef } from 'react';
import Input from '../input/Input';
import { Todo } from '@/type/type';
import Delete from './Delete';
import Count from './Count';
import Check from './Check';

export default function ToDo() {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState<Todo[]>([]);
  const [hasValue, setHasValue] = useState(false);
  const [count, setCount] = useState(0);
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

  useEffect(() => {
    const unChecked = todo.filter((todo) => !todo.isChecked).length;
    setCount(unChecked);
  }, [todo]);

  return (
    <>
      <Input
        type='button'
        value={value}
        onClick={handleAddClick}
        onChange={handleValueChange}
        onKeyDown={handleEnterKeyDown}
      />
      {hasValue && (
        <div className='mt-12 m-auto w-[50rem] max-md:w-full'>
          <Count todo={todo} count={count} />
          <ul className='mt-8'>
            {todo.map((todo: Todo, idx) => (
              <li className={`relative mt-4 first:mt-0 bg-white px-5 py-4 rounded-3xl`} key={todo.id}>
                <Check todo={todo} idx={idx} handleCheckChange={handleCheckChange} />
                <Delete todo={todo} handleDeleteClick={handleDeleteClick} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
