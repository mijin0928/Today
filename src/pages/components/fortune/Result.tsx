import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { getResult } from '@/pages/api/api';
import { Item } from '@/type/type';

export default function Result() {
  const router = useRouter();

  const handleResetClick = () => {
    router.push('/fortune');
  };

  const { data: resultData, isLoading: resultLoading } = useQuery({
    queryKey: ['/api/data'],
    queryFn: () => getResult(),
  });

  useEffect(() => {
    document.body.style.cursor = 'default';
  }, []);

  return (
    <>
      <div className='relative flex justify-center items-center h-screen before:absolute before:top-2/4 before:left-2/4 before:translate-x-[-50%] before:translate-y-[-50%] before:w-screen before:h-[90vh] before:bg-paper before:bg-contain before:bg-no-repeat before:bg-center before:z-[-1]'>
        {resultData.map((item: Item) => {
          return (
            <p
              key={item.id}
              className='p-4 text-primary text-[1.25rem] bg-white max-sm:text-[1rem] max-md:max-h-[12.5rem] max-sm:max-h-[5rem] max-md:overflow-y-auto scrollbar-thumb-primary scrollbar-track-transparent scrollbar-thin max-w-[45%]'
            >
              {item.result}
            </p>
          );
        })}
      </div>
      <button
        className='w-[6.25rem] h-[6.25rem] bg-reset bg-no-repeat bg-center bg-cover absolute bottom-[2rem] right-[3rem] max-sm:w-[3.75rem] max-sm:h-[3.75rem] indent-[100%] overflow-hidden whitespace-nowrap'
        type='button'
        onClick={handleResetClick}
      >
        처음으로
      </button>
    </>
  );
}
