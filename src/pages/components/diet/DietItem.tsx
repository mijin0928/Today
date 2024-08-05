import Image from 'next/image';
import { DietItems, DietProps } from '@/type/type';
import FileInput from './FileInput';
import KcalInput from './KcalInput';
import Rating from './Rating';
import Delete from './Delete';

export default function DietItem({ selectedValue, diet, hasItem, handleDeleteClick }:DietProps) {
  return (
    <div className='p-5 text-primary rounded-b-2xl bg-white'>
      <ul>
        {hasItem !== 0 ? (
          diet.map(
            (item: DietItems) =>
              item.category === selectedValue && (
                <li className='flex items-center justify-between mt-10 first:mt-0 text-[1.2rem]' key={item.id}>
                  <FileInput id={item.id} />
                  <div className='w-[350px] shrink-0'>
                    <KcalInput kcal={item.text} />
                    <Rating />
                  </div>
                  <Delete id={item.id} handleDeleteClick={handleDeleteClick} />
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
