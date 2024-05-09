import { useState } from 'react';
import useSetInterval from '@/pages/hooks/useSetInterval';

export default function MainTitle({ title }: { title: string }) {
  const [dot, setDot] = useState('');
  const DOT = '...';
  let count = 0;
  let total = '';
  
  useSetInterval(() => {
    setDot((total += DOT[count++]));

    if (count > DOT.length) {
      setDot('');
      total = '';
      count = 0;
    }
  }, 400);

  return (
    <h2 className='pb-10 text-[5rem] font-poor_Story text-primary before:absolute before:left-[14rem] before:top-[0.7rem] before:z-[-1] before:w-[6.5rem] before:h-[6.5rem] before:rounded-[2.8rem] before:bg-white before:animate-rotate'>
      오늘의 {title} <span className='font-fredoka'>{dot}</span>
    </h2>
  );
}
