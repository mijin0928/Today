import { useEffect, useState } from 'react';
import { Props } from '@/type/type';
import { useRouter } from 'next/router';

export default function Result({ fortune }: { fortune: Props[] }) {
  const [result, setResult] = useState(0);
  const random = Math.floor(Math.random() * fortune.length);
  const router = useRouter();

  const handleResetClick = () => {
    router.push('/fortune');
  };

  useEffect(() => {
    setResult(random);
  }, []);

  return (
    <>
      <div className='relative flex justify-center items-center h-screen before:absolute before:top-2/4 before:left-2/4 before:translate-x-[-50%] before:translate-y-[-50%] before:w-screen before:h-[90vh] before:bg-paper before:bg-contain before:bg-no-repeat before:bg-center before:z-[-1]'>
        {fortune.map((item, idx) => {
          if (idx === result) {
            return (
              <p
                key={item.id}
                className='p-4 text-primary text-[1.25rem] bg-white max-sm:text-[1rem] max-md:max-h-[12.5rem] max-sm:max-h-[5rem] max-md:overflow-y-auto scrollbar-thumb-primary scrollbar-track-transparent scrollbar-thin max-w-[45%]'
              >
                {item.result}
              </p>
            );
          }
        })}
      </div>
      <button
        className='w-[6.25rem] h-[6.25rem] bg-reset bg-no-repeat bg-center bg-cover absolute bottom-[2rem] right-[3rem] max-sm:w-[3.75rem] max-sm:h-[3.75rem]'
        type='button'
        onClick={handleResetClick}
      />
    </>
  );
}
