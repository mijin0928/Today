import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { GNB } from '@/constant/constant';

export default function Gnb() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleGnbClick = (id: string) => {
    router.push(id);
  };

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const handleResize = () => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;

          if (window.innerWidth < 1024) {
            setIsOpen(false);
          }
        }, 300);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block absolute lg:left-0 lg:top-[50%] right-0 lg:right-auto lg:translate-y-[-50%] w-[100%] lg:w-auto h-[100%] lg:h-auto bg-white lg:bg-transparent`}
      >
        {GNB.map((gnb, i) => (
          <li
            key={i}
            className={`mt-12 lg:mt-10 first:mt-20 lg:first:mt-0 pl-10 lg:pt-2 lg:pr-4 lg:pb-2 lg:pl-24 text-[1.5rem] lg:text-[2rem] md:text-[1.8rem] font-poor_Story border-b lg:border-0 border-inherit text-primary cursor-pointer hover:pl-[1.2rem] lg:hover:translate-x-[1.2rem] lg:bg-white`}
            onClick={() => handleGnbClick(gnb.id)}
          >
            {gnb.item}
          </li>
        ))}
      </ul>
      <button
        type='button'
        className={`lg:hidden overflow-hidden absolute right-0 w-[3rem] md:w-[4rem] h-[3rem] md:h-[4rem] z-[1] indent-[100%] whitespace-nowrap ${
          isOpen ? 'bg-close' : 'bg-open'
        } bg-no-repeat bg-cover`}
        onClick={handleOpenClick}
      >
        모바일 메뉴
      </button>
    </nav>
  );
}
