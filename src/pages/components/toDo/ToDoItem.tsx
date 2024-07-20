import Delete from './Delete';
import Count from './Count';
import Check from './Check';
import { Todo, ToDoProps } from '@/type/type';

export default function ToDoItem({ todo, handleDeleteClick, handleCheckChange }: ToDoProps<Todo[]>) {
  return (
    <div className='mt-12 m-auto w-[50rem] max-md:w-full'>
      <Count todo={todo} />
      <ul className='mt-8'>
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
