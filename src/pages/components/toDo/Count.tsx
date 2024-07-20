import { useEffect, useState } from 'react';
import { Todo, ToDoProps } from '@/type/type';

export default function Count({ todo }: ToDoProps<Todo[]>) {
  const [count, setCount] = useState(0);
  const isVisible = todo.length === 0 ? 'before:hidden after:hidden' : 'before:block after:block';

  useEffect(() => {
    const unChecked = todo.filter((todo) => !todo.isChecked).length;
    setCount(unChecked);
  }, [todo]);

  return (
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
  );
}
