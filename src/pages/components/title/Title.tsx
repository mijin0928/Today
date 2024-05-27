import { useState } from 'react';
import Gnb from '../gnb/Gnb';
import { useSetInterval } from '@/pages/hooks/useSetInterval';

export default function Title() {
  const [title, setTitle] = useState('');
  const [end, setEnd] = useState(false);
  const TITLE: string = 'TODAY IS ...';
  const { countRef, totalRef } = useSetInterval(() => {
    countRef.current < TITLE.length ? setTitle((totalRef.current += TITLE[countRef.current++])) : setEnd(true);
  }, 300);

  return (
    <>
      {end && <Gnb />}
      <h1 className='flex justify-center items-center h-screen font-fredoka text-5xl md:text-8xl lg:text-9xl text-primary before:absolute before:z-[-1] before:size-[10rem] before:md:size-[15rem] before:lg:size-[20rem] before:left-[calc(50%_-_5rem)] before:md:left-[calc(50%_-_7.5rem)] before:lg:left-[calc(50%_-_10rem)] before:top-[50%] before:rounded-full before:animate-rotate before:bg-white before:origin-top'>
        {title}
      </h1>
    </>
  );
}
