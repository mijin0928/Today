import { Todo, ToDoProps } from '@/type/type';

export default function Check({ idx = 0, todo, handleCheckChange }: ToDoProps<Todo>) {
  return (
    <>
      <input
        className='absolute left-8 top-[50%] translate-y-[-50%] appearance-none w-10 h-10 bg-checkbox bg-contain bg-no-repeat cursor-pointer checked:bg-checkboxOn'
        id={`checkbox${idx + 1}`}
        name={`checkbox${idx + 1}`}
        type='checkbox'
        onChange={() => handleCheckChange && handleCheckChange(todo.id)}
      />
      <label
<<<<<<< HEAD
        className={`block ml-20 max-sm:ml-16 w-[calc(100%_-_130px)] ${
          todo && todo.isChecked ? 'opacity-50' : 'opacity-1'
        } text-[1.25rem] max-sm:text-[1rem] text-primary cursor-pointer`}
=======
        className={`ml-20 max-sm:block max-sm:ml-16 max-sm:w-40 ${
          todo.isChecked ? 'opacity-50' : 'opacity-1'
        } text-[1.25rem] text-primary cursor-pointer`}
>>>>>>> fc8b4e5 (feat: toDoList 페이지 구현)
        htmlFor={`checkbox${idx + 1}`}
      >
        {todo.text}
      </label>
    </>
  );
}
