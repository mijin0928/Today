import { useEffect, useState } from 'react';
import Gnb from '../gnb/Gnb';

export default function Title() {
  const [title, setTitle] = useState('');
  const [end, setEnd] = useState(false);
  const TITLE: string = 'TODAY IS ...';
  let count = 0;
  let total = '';

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < TITLE.length) {
        total += TITLE[count++];
        setTitle(total);
      } else {
        clearTimeout(timer);
        setEnd(true);
      }
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {end && <Gnb />}
      <h1 className='flex justify-center items-center h-screen font-fredoka text-5xl md:text-8xl lg:text-9xl text-primary before:absolute before:z-[-1] before:size-[10rem] before:md:size-[15rem] before:lg:size-[20rem] before:left-[calc(50%_-_5rem)] before:md:left-[calc(50%_-_7.5rem)] before:lg:left-[calc(50%_-_10rem)] before:top-[50%] before:rounded-full before:animate-rotate before:bg-white before:origin-top'>
        {title}
      </h1>
    </>
  );
}
