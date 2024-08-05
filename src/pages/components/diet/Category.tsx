import { CATEGORY } from '@/constant/constant';
import DietItem from './DietItem';
import { DietProps } from '@/type/type';

export default function Category({ selectedValue, diet, hasItem, handleCategoryClick, handleDeleteClick }: DietProps) {
  return (
    <div className='w-[45rem] m-auto'>
      <div className='flex justify-between'>
        {CATEGORY.map((item) => (
          <ul
            className={`w-1/3 ${selectedValue === item.id ? 'bg-white' : 'bg-transparent'}`}
            key={item.id}
            onClick={() => handleCategoryClick && handleCategoryClick(item.id)}
          >
            <li className={`py-2 rounded-t-2xl text-primary text-[1.4rem] text-center cursor-pointer`}>{item.title}</li>
          </ul>
        ))}
      </div>
      <DietItem selectedValue={selectedValue} diet={diet} hasItem={hasItem} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}
