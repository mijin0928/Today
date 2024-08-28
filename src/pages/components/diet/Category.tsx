import { CATEGORY } from '@/constant/constant';
import { CategoryProps } from '@/type/type';

export default function Category({ selectedValue, handleCategoryClick }: CategoryProps) {
  return (
    <div className='flex justify-between'>
      {CATEGORY.map((item) => (
        <ul
          className={`w-1/3 ${selectedValue === item.id ? ' rounded-t-2xl bg-white' : 'bg-transparent'}`}
          key={item.id}
          onClick={() => handleCategoryClick(item.id)}
        >
          <li className='py-2 text-primary text-[1.4rem] text-center cursor-pointer'>{item.title}</li>
        </ul>
      ))}
    </div>
  );
}
