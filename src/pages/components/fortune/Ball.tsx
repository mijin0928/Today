import Image from 'next/image';

export default function Ball({ handleHandOver }: { handleHandOver: () => void }) {
  return (
    <div className='relative'>
      <Image
        className='w-full max-w-[28rem] m-auto md:translate-x-[-6.25rem]'
        src='/crystal-ball.gif'
        width={0}
        height={0}
        alt='마법구슬'
        priority
        onMouseOver={handleHandOver}
      />
      <Image
        className='hidden md:block md:absolute md:top-[3rem] md:left-1/2 md:translate-x-[-3.1rem]'
        src='/wizard.png'
        width={300}
        height={300}
        alt='마법사'
      />
    </div>
  );
}
