import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GNB, ANIMATION } from '@/constant/constant';

export default function Gnb() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const isVisible = isOpen
    ? 'visible translate-x-0 duration-500 w-2/4 h-full'
    : 'invisible w-0 h-0 translate-x-full lg:translate-x-0 duration-500 lg:duration-0';
  const isOpenMenu = isOpen ? 'bg-close' : 'bg-open';

  const handleGnbClick = (id: string) => {
    const isMain = id === 'main' ? '/' : id;
    router.push(isMain);
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
        className={`${isVisible} lg:visible absolute lg:left-0 lg:top-1/2 right-0 lg:right-auto lg:translate-y-[-50%] lg:w-auto lg:h-auto border-l lg:border-0 bg-white lg:bg-transparent`}
      >
        {GNB.map((gnb, i) => (
          <li
            key={i}
            className={`mt-12 lg:mt-8 first:mt-24 lg:first:mt-0 pl-10 pb-2 lg:pt-4 lg:pr-4 lg:pb-4 lg:pl-28 text-2xl lg:text-[2rem] md:text-[1.8rem] font-poor_Story border-b lg:border-0 border-inherit text-primary cursor-pointer hover:pl-16 lg:hover:translate-x-5 lg:hover:pl-5 duration-300 lg:bg-white ${
              router.pathname === '/' && ANIMATION[i]
            }`}
            onClick={() => handleGnbClick(gnb.id)}
          >
            {gnb.item === '홈' ? (
              <Image src='/home.png' width={40} height={40} alt='홈' className='m-auto' />
            ) : (
              gnb.item
            )}
          </li>
        ))}
      </ul>
      <button
        type='button'
        className={`${isOpenMenu} lg:hidden overflow-hidden absolute right-0 w-12 md:w-16 h-12 md:h-16 indent-[100%] whitespace-nowrap bg-no-repeat bg-cover`}
        onClick={handleOpenClick}
      >
        모바일 메뉴
      </button>
    </nav>
  );
}
