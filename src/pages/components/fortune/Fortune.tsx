import Image from 'next/image';

export default function Fortune() {
  return (
    <div className='text-center'>
      <div className='md:flex justify-center items-center mb-10 pt-5 pb-5 pl-5 md:pl-20 pr-5 md:pr-20 border-dotted border-white border-8 shadow-sm text-center md:text-left'>
        <p className='md:mr-2 text-[1.3rem] md:text-[1.6rem] text-primary break-keep'>
          <span className='shadow-[inset_0_-11px_white]'>손을 클릭하여</span>
          <span className='md:block pl-1.5 md:pl-0 shadow-[inset_0_-11px_white]'>구슬을 문질러보세요</span>
        </p>
        <Image
          className='w-[5rem] h-[5rem] md:w-[6.25rem] md:h-[6.25rem] m-[1rem_auto_0] md:m-0 cursor-pointer'
          width={100}
          height={100}
          src='/hand.png'
          alt='손'
        />
      </div>
      <div className='relative'>
        <Image
          className='m-auto md:m-0 md:absolute md:left-1/2 md:top-0 md:translate-x-[-60%] w-full max-w-[28rem] h-[auto] md:w-[28rem]'
          src='/crystal-ball.gif'
          width={450}
          height={450}
          alt='마법구슬'
        />
        <Image
          className='hidden md:block absolute md:top-[5rem] md:right-[calc(50%_-_15rem)]'
          src='/wizard.png'
          width={300}
          height={300}
          alt='마법사'
        />
      </div>
    </div>
  );
}
