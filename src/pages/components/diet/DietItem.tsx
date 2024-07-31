import FileInput from './FileInput';
import KcalInput from './KcalInput';

export default function DietItem({ selectedValue, todo }) {
  return (
    <div className='p-5 text-primary text-[1.2rem] rounded-b-2xl bg-white'>
      {todo.map(
        (item) =>
          item.category === selectedValue && (
            <ul key={item.id}>
              <li className='flex items-center gap-10 mt-10'>
                <FileInput id={item.id} />
                <KcalInput text={item.text} />
              </li>
            </ul>
          )
      )}
    </div>
  );
}
