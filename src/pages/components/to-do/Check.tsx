export default function Check({ idx, todo, handleCheckChange }) {
  return (
    <>
      <input
        className='absolute left-8 top-[50%] translate-y-[-50%] appearance-none w-10 h-10 bg-checkbox bg-contain bg-no-repeat cursor-pointer checked:bg-checkboxOn'
        id={`checkbox${idx + 1}`}
        name={`checkbox${idx + 1}`}
        type='checkbox'
        onChange={() => handleCheckChange(todo.id)}
      />
      <label
        className={`ml-20 max-sm:block max-sm:ml-16 max-sm:w-40 ${
          todo.isChecked ? 'opacity-50' : 'opacity-1'
        } text-[1.25rem] text-primary cursor-pointer`}
        htmlFor={`checkbox${idx + 1}`}
      >
        {todo.text}
      </label>
    </>
  );
}
