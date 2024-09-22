import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Reset() {
  const router = useRouter();

  const handleResetClick = () => {
    router.push('/fortune');
  };

  useEffect(() => {
    document.body.style.cursor = 'default';
  }, []);

  return (
    <button
      className='w-[6.25rem] h-[6.25rem] bg-reset bg-no-repeat bg-center bg-cover absolute bottom-[2rem] right-[3rem] max-sm:w-[3.75rem] max-sm:h-[3.75rem] indent-[100%] overflow-hidden whitespace-nowrap'
      type='button'
      onClick={handleResetClick}
    >
      처음으로
    </button>
  );
}
