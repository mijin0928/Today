import { ChangeEvent, useState } from 'react';
import Input from '../input/Input';
import { Todo } from '@/type/type';

export default function ToDo() {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState<Todo[]>([]);
  const [count, setCount] = useState(1);
  const [hasValue, setHasValue] = useState(false);
  const [a, seta] = useState(false);
  const isRemove = a ? 'animate-up' : 'animate-down';

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddClick = () => {
    setCount(count + 1);
    setTodo([...todo, { id: count, text: value }]);
    setValue('');
    setHasValue(true);
    seta(true);
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddClick();
    }
  };

  const handleRemoveClick = (id: number) => {
    const updateTodo = todo.filter((item) => item.id !== id);
    setTodo(updateTodo);
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
      {hasValue && (
        <div>
          <ul className='mt-12 m-[0_auto] w-[50rem]'>
            {todo.map((todo: Todo) => (
              <li
                className={`relative mt-4 first:mt-0 text-[1.25rem] text-primary bg-white px-5 py-4 rounded-3xl ${isRemove}`}
                key={todo.id}
              >
                {todo.text}
                <button
                  className='absolute top-[50%] right-[2rem] translate-y-[-50%] overflow-hidden w-[50px] h-[50px] indent-[100%] whitespace-nowrap bg-remove bg-no-repeat bg-contain hover:bg-removeOn'
                  type='button'
                  onClick={() => handleRemoveClick(todo.id)}
                >
                  삭제하기
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
