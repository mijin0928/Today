import { DIET } from '@/constant/constant';

export default function Tab({ selectedValue }) {
  return (
    <>
      {selectedValue && (
        <ul className='flex justify-center gap-20'>
          {DIET.map((item) => (
            <li
              className={`${
                selectedValue === item.title ? 'bg-white' : 'bg-transparent'
              } py-2 px-20 rounded-t-2xl text-primary text-[1.3rem]`}
              key={item.id}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
