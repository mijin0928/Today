import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getResult } from '@/pages/api/api';
import Reset from './Reset';
import Loading from '../loading/loading';

export default function Result() {
  const { data: resultData, isLoading: resultLoading } = useQuery({
    queryKey: ['/api/data'],
    queryFn: () => getResult(),
  });

  useEffect(() => {
    document.body.style.cursor = 'default';
  }, []);

  if (resultLoading) return <Loading />;

  return (
    <>
      <div className='relative flex justify-center items-center h-screen before:absolute before:top-2/4 before:left-2/4 before:translate-x-[-50%] before:translate-y-[-50%] before:w-screen before:h-[90vh] before:bg-paper before:bg-contain before:bg-no-repeat before:bg-center before:z-[-1]'>
        <p className='p-4 text-primary text-[1.25rem] bg-white max-sm:text-[1rem] max-md:max-h-[12.5rem] max-sm:max-h-[5rem] max-md:overflow-y-auto scrollbar-thumb-primary scrollbar-track-transparent scrollbar-thin max-w-[45%]'>
          {resultData[0].result}
        </p>
      </div>
      <Reset />
    </>
  );
}
