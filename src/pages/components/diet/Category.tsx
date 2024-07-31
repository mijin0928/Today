import { DIET } from '@/constant/constant';
import DietItem from './DietItem';

export default function Category({ selectedValue, todo }) {
  return (
    <div className='w-[45rem] m-auto'>
      <div className='flex justify-between'>
        {DIET.map((item) => (
          <>
            <div className='w-1/3' key={item.id}>
              <ul>
                <li
                  className={`${
                    selectedValue === item.title ? 'bg-white' : 'bg-transparent'
                  } py-2 rounded-t-2xl text-primary text-[1.4rem] text-center cursor-pointer`}
                >
                  {item.title}
                </li>
              </ul>
            </div>
          </>
        ))}
      </div>
      <DietItem selectedValue={selectedValue} todo={todo} />
    </div>
  );
}
