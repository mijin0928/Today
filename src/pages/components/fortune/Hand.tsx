import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Hand() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const handRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isTouchBall = isTouch ? 'animate-shake' : 'animate-none';
  const router = useRouter();

  const handleHandClick = () => {
    setIsVisible(true);
    // document.body.style.cursor = 'none';
  };

  const handleHandOver = () => {
    setIsTouch(isVisible && true);
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (handRef.current) {
        handRef.current.style.left = `${e.pageX}px`;
        handRef.current.style.top = `${e.pageY}px`;
      }
    };

    const handleOutSideMove = (e: MouseEvent) => {
      const target = e.target as Node | null;

      if (isTouch && !containerRef.current?.contains(target)) {
        setIsTouch(false);
      }
    };

    let timer: NodeJS.Timeout | undefined = undefined;
    if (isTouch) {
      timer = setTimeout(() => {
        router.push('/fortune/result');
      }, 3000);
    }

    window.addEventListener('mousemove', (e) => {
      handleMove(e);
      handleOutSideMove(e);
    });

    return () => {
      window.removeEventListener('mousemove', (e) => {
        handleMove(e);
        handleOutSideMove(e);
      });

      clearTimeout(timer);
    };
  }, [isTouch]);

  return (
    <div className='text-center' ref={containerRef}>
      <div className='md:flex justify-center items-center mb-10 pt-5 pb-5 pl-5 md:pl-20 pr-5 md:pr-20 border-dotted border-white border-8 text-center md:text-left'>
        <p className='md:mr-2 text-[1.3rem] md:text-[1.6rem] text-primary break-keep'>
          <span className='shadow-[inset_0_-11px_white]'>손을 클릭하여</span>
          <span className='md:block pl-1.5 md:pl-0 shadow-[inset_0_-11px_white]'>구슬을 문질러보세요</span>
        </p>
        <div className='w-[5rem] h-[5rem] md:w-[6.25rem] md:h-[6.25rem] m-[1rem_auto_0] md:m-0'>
          {!isVisible ? (
            <Image
              className='
              } w-[5rem] h-[5rem] md:w-[6.25rem] md:h-[6.25rem] m-[1rem_auto_0] md:m-0 cursor-pointer'
              width={100}
              height={100}
              src='/hand.png'
              alt='손'
              onClick={handleHandClick}
            />
          ) : (
            <Image
              className={`absolute z-[1] w-[5rem] h-[5rem] md:w-[6.25rem] md:h-[6.25rem] m-[1rem_auto_0] md:m-0 ${isTouchBall}`}
              width={100}
              height={100}
              src='/hand.png'
              alt='움직이는 손'
              ref={handRef}
            />
          )}
        </div>
      </div>
    </div>
  );
}
