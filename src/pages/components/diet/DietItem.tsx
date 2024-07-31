import FileInput from './FileInput';

export default function DietItem({ selectedValue, todo }) {
  return (
    <div className='p-5 text-primary text-[1.2rem] rounded-b-2xl bg-white'>
      {todo.map(
        (item) =>
          item.category === selectedValue && (
            <ul key={item.id}>
              <li className='flex items-center gap-10 mt-10'>
                <FileInput id={item.id}/>
                <div>
                  {item.text}
                  <input className='w-16 ml-5 mr-2 outline-none border-b-2 border-primary text-center' type='text' autoFocus />
                  <span>kcal</span>
                </div>
              </li>
            </ul>
          )
      )}
    </div>
  );
}
