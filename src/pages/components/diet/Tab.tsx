import { DIET } from '@/constant/constant';
import TabItem from './TabItem';

export default function Tab({ selectedValue, todo }) {
  return (
    <div className='w-[720px] m-auto'>
      <div className='flex justify-center gap-20'>
        {DIET.map((item) => (
          <>
            <div key={item.id}>
              <ul>
                <li
                  className={`${
                    selectedValue === item.title ? 'bg-white' : 'bg-transparent'
                  } py-2 px-16 rounded-t-2xl text-primary text-[1.3rem] cursor-pointer`}
                >
                  {item.title}
                </li>
              </ul>
            </div>
          </>
        ))}
      </div>
      <TabItem selectedValue={selectedValue} todo={todo} />
    </div>
  );
}
