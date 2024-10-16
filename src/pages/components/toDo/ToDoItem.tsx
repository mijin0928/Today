import Delete from './Delete';
import Count from './Count';
import Check from './Check';
import { Todo, ToDoProps } from '@/type/type';

export default function ToDoItem({ todo, handleDeleteClick, handleCheckChange, hasValue }: ToDoProps<Todo[]>) {
  const isVisible = !hasValue && todo && todo.length === 0 && 'invisible';

  return (
    <div className={`flex-col items-center gap-10 2xl:flex-row-reverse 2xl:justify-end 2xl:gap-20 flex ${isVisible}`}>
      <Count todo={todo} />
      <ul className='xl:shrink-0 overflow-y-auto w-full md:w-[43.75rem] h-[21.8rem] scrollbar-thumb-primary scrollbar-track-transparent scrollbar-thin'>
        {todo.map((todo, idx) => (
          <li className={`relative mt-4 first:mt-0 bg-white px-5 py-4 rounded-3xl`} key={todo.id}>
            <Check todo={todo} idx={idx} handleCheckChange={handleCheckChange} />
            <Delete todo={todo} handleDeleteClick={handleDeleteClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}
