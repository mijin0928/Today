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
    document.body.style.cursor = 'none';
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
    <div className='relative'>
      <Image
        className='m-auto md:m-0 md:absolute md:left-1/2 md:top-0 md:translate-x-[-70%] w-full max-w-[28rem] h-[auto] md:w-[28rem]'
        src='/crystal-ball.gif'
        width={450}
        height={450}
        alt='마법구슬'
        priority
        onMouseOver={handleHandOver}
      />
      <Image
        className='hidden md:block absolute md:top-[5rem] md:right-[calc(50%_-_15rem)]'
        src='/wizard.png'
        width={300}
        height={300}
        alt='마법사'
      />
    </div>
  );
}
