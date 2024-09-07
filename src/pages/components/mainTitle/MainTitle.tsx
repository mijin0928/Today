import { useState } from 'react';
import { useSetInterval } from '@/pages/hooks/useSetInterval';

export default function MainTitle({ title }: { title: string }) {
  const [dot, setDot] = useState('');
  const DOT = '...';
  const { countRef, totalRef } = useSetInterval(() => {
    setDot((totalRef.current += DOT[countRef.current++]));

    if (countRef.current > DOT.length) {
      setDot('');
      totalRef.current = '';
      countRef.current = 0;
    }
  }, 400);

  return (
    <h2 className='relative inline-block pb-10 text-[3rem] sm:text-[5rem] font-poor_Story text-primary before:absolute before:right-0 before:sm:right-[4.9rem] before:top-0 before:sm:top-[0.5rem] before:z-[-1] before:w-[5rem] before:sm:w-[6.5rem] before:h-[5rem] before:sm:h-[6.5rem] before:rounded-[2.8rem] before:bg-white before:animate-rotate'>
      오늘의 {title} <span className='hidden sm:inline-block w-[3.25rem] leading-4 font-fredoka'>{dot}</span>
    </h2>
  );
}
