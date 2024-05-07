import { useEffect, useState } from 'react';

export default function Title() {
  const [title, setTitle] = useState('');
  const TITLE: string = 'TODAY IS ...';
  let count = 0;
  let total = '';

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < TITLE.length) {
        total += TITLE[count++];
        setTitle(total);
      }
    }, 300);
   
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <h1 className='flex justify-center items-center h-screen font-fredoka text-5xl md:text-8xl lg:text-9xl text-primary'>
      {title}
    </h1>
  );
}
