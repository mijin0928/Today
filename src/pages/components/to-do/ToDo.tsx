import { ChangeEvent, useEffect, useState, useRef } from 'react';
import Input from '../input/Input';
import { Todo } from '@/type/type';

export default function ToDo() {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState<Todo[]>([]);
  const [hasValue, setHasValue] = useState(false);
  const [count, setCount] = useState(0);
  const [id, setId] = useState(0);
  const countRef = useRef(1);
  const todoList = { id: id, text: value, isChecked: false };
  const isVisible = todo.length === 0 ? 'before:hidden after:hidden' : 'before:block after:block';

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

  const handleCheckClick = (id: number) => {
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
          <p
            className={`relative w-[19rem] m-auto text-center text-primary text-[1.4rem] shadow-[inset_0_-11px_white] ${isVisible} before:absolute before:left-0 before:bottom-3 before:w-8 before:h-8 before:bg-comma before:bg-contain before:scale-[-1] after:absolute after:right-0 after:bottom-2 after:w-8 after:h-8 after:bg-comma after:bg-contain`}
          >
            {count !== 0 ? (
              <>
                할일이 <span className='font-bold'>{count}</span>개 남았어요
              </>
            ) : (
              todo.length !== 0 && (
                <>
                  할일을 모두 <span className='font-bold'>완료</span>했어요
                </>
              )
            )}
          </p>
          <ul className='mt-8'>
            {todo.map((todo: Todo, idx) => (
              <li className={`relative mt-4 first:mt-0 bg-white px-5 py-4 rounded-3xl`} key={todo.id}>
                <input
                  className='absolute left-8 top-[50%] translate-y-[-50%] appearance-none w-10 h-10 bg-checkbox bg-contain bg-no-repeat cursor-pointer checked:bg-checkboxOn'
                  id={`checkbox${idx + 1}`}
                  name={`checkbox${idx + 1}`}
                  type='checkbox'
                />
                <label
                  className={`ml-20 max-sm:block max-sm:ml-16 max-sm:w-40 ${
                    todo.isChecked ? 'opacity-50' : 'opacity-1'
                  } text-[1.25rem] text-primary cursor-pointer`}
                  htmlFor={`checkbox${idx + 1}`}
                  onClick={() => handleCheckClick(todo.id)}
                >
                  {todo.text}
                </label>
                <button
                  className='absolute top-[50%] right-[2rem] translate-y-[-50%] overflow-hidden w-11 h-11 indent-[100%] whitespace-nowrap bg-delete bg-no-repeat bg-contain hover:bg-deleteOn'
                  type='button'
                  onClick={() => handleDeleteClick(todo.id)}
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
