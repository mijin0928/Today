import Image from 'next/image';
import FileInput from './FileInput';
import KcalInput from './KcalInput';
import Rating from './Rating';

export default function DietItem({ selectedValue, todo, hasItem }) {
  return (
    <div className='p-5 text-primary rounded-b-2xl bg-white'>
      <ul>
        {hasItem !== 0 ? (
          todo.map(
            (item) =>
              item.category === selectedValue && (
                <li className='flex items-center gap-10 mt-10 first:mt-0 text-[1.2rem]' key={item.id}>
                  <FileInput id={item.id} />
                  <div>
                    <KcalInput text={item.text} />
                    <Rating />
                  </div>
                </li>
              )
          )
        ) : (
          <div className='py-10'>
            <Image className='m-auto' src='/diet.png' width='140' height='140' alt='식단' />
            <p className='mt-5 text-[1.3rem] text-center'>작성된 식단이 없어요</p>
          </div>
        )}
      </ul>
    </div>
  );
}
