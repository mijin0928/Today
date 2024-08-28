import { MouseEvent, useState, useRef, useEffect } from 'react';
import { CATEGORY } from '@/constant/constant';
import { InputProps } from '@/type/type';

export default function Dropdown({ value, selectedValue, onClick }: InputProps) {
  const [toggle, setToggle] = useState(false);
  const [image, setImage] = useState('bg-arrow');
  const isToggle = toggle ? 'block' : 'hidden';
  const dietRef = useRef<HTMLUListElement | null>(null);
  const isSelected = selectedValue || '선택';

  const handleDropdownClick = () => {
    setToggle(!toggle);
  };

  const handleValueClick = (e: MouseEvent<HTMLUListElement>) => {
    if(value === '') return;
    onClick(e);
    setToggle(false);
  };

  useEffect(() => {
    if (dietRef.current) {
      dietRef.current.children[0].classList.add('bg-morning');
      dietRef.current.children[1].classList.add('bg-day');
      dietRef.current.children[2].classList.add('bg-night');
    }

    switch (selectedValue) {
      case '아침':
        setImage('bg-morning');
        break;
      case '점심':
        setImage('bg-day');
        break;
      case '저녁':
        setImage('bg-night');
        break;
    }
  }, [selectedValue]);

  return (
    <div className='relative shrink-0 text-[1.18rem] max-sm:text-base text-white'>
      <button
        className={`${image} py-2 pl-3 pr-10 border border-white bg-primary bg-no-repeat bg-[length:25px_25px] bg-[85%]`}
        onClick={handleDropdownClick}
        type='button'
      >
        {isSelected}
      </button>
      <ul className={`${isToggle} absolute left-0 top-12 border border-white`} onClick={handleValueClick} ref={dietRef}>
        {CATEGORY.map((diet) => (
          <li
            data-value={diet.title}
            className='py-2 pl-3 pr-10 border-b last:border-b-0 border-white cursor-pointer bg-primary bg-no-repeat bg-[length:25px_25px] bg-[85%] hover:text-primary hover:bg-white'
            key={diet.id}
          >
            {diet.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
