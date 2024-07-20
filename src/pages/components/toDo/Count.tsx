import { useEffect, useState } from 'react';
import { Todo, ToDoProps } from '@/type/type';

export default function Count({ todo }: ToDoProps<Todo[]>) {
  const [count, setCount] = useState(0);
  const isVisible = todo.length === 0 ? 'before:hidden after:hidden 2xl:w-0 2xl:h-0' : 'before:block after:block';

  useEffect(() => {
    const unChecked = todo.filter((todo) => !todo.isChecked).length;
    setCount(unChecked);
  }, [todo]);

  return (
    <p
      className={`relative inline-block px-12 text-primary text-[1.4rem] max-xl:shadow-[inset_0_-11px_white] ${isVisible} before:absolute before:left-0 before:bottom-3 before:w-8 before:h-8 before:bg-comma before:bg-contain before:scale-[-1] after:absolute after:right-0 after:bottom-2 after:w-8 after:h-8 after:bg-comma after:bg-contain break-keep 2xl:w-[17.5rem] 2xl:h-[17.5rem] 2xl:px-0 2xl:leading-[17.5rem] 2xl:text-center 2xl:bg-white 2xl:rounded-full 2xl:before:top-0 2xl:animate-bouncing 2xl:before:w-9 2xl:before:h-9 2xl:after:w-9 2xl:after:h-9`}
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
  );
}
