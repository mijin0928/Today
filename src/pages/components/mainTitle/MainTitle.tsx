import { useState, useRef } from 'react';
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
    <h2 className='pb-10 text-[3.5rem] md:text-[5rem] font-poor_Story text-primary before:absolute before:left-[11.8rem] before:md:left-[16.3rem] before:top-[0.5rem] before:md:top-[0.7rem] before:z-[-1] before:w-[5rem] before:md:w-[6.5rem] before:h-[5rem] before:md:h-[6.5rem] before:rounded-[2.8rem] before:bg-white before:animate-rotate'>
      오늘의 {title} <span className='font-fredoka'>{dot}</span>
    </h2>
  );
}
