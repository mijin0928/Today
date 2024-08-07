import { Todo, ToDoProps } from '@/type/type';

export default function Delete({ todo, handleDeleteClick }: ToDoProps<Todo>) {
  return (
    <button
      className='absolute top-[50%] right-[2rem] translate-y-[-50%] overflow-hidden w-11 h-11 indent-[100%] whitespace-nowrap bg-delete bg-no-repeat bg-contain hover:bg-deleteOn'
      type='button'
      onClick={() => handleDeleteClick && handleDeleteClick(todo.id)}
    >
      삭제하기
    </button>
  );
}
