import Image from 'next/image';
import { DietItems, DietItemProps } from '@/type/type';
import FileInput from './FileInput';
import KcalInput from './KcalInput';
import Rating from './Rating';
import Delete from './Delete';

export default function DietItem({ itemLength, filterItem, handleDeleteClick, updateItem }: DietItemProps) {
  return (
    <div className='sm:overflow-y-auto py-12 px-5 sm:h-[20rem] 2xl:px-10 text-primary rounded-b-2xl bg-white scrollbar-thumb-primary scrollbar-track-transparent scrollbar-thin'>
      <ul>
        {itemLength !== 0 ? (
          filterItem.map((item: DietItems) => (
            <li className='relative block sm:flex sm:items-center sm:justify-around mt-10 first:mt-0 text-[1.2rem]' key={item.id}>
              <FileInput id={item.id} file={item.file} updateItem={updateItem} />
              <div className='sm:w-[50%]'>
                <KcalInput id={item.id} text={item.text} kcal={item.kcal} updateItem={updateItem} />
                <Rating id={item.id} rating={item.rating} review={item.review} updateItem={updateItem} />
              </div>
              <Delete id={item.id} handleDeleteClick={handleDeleteClick} />
            </li>
          ))
        ) : (
          <div>
            <Image className='m-auto' src='/diet.png' width='140' height='140' alt='식단' />
            <p className='mt-5 text-[1.3rem] text-center'>작성된 식단이 없어요</p>
          </div>
        )}
      </ul>
    </div>
  );
}
