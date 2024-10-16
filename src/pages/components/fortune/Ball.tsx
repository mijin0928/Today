import Image from 'next/image';

export default function Ball({ handleHandOver }: { handleHandOver: () => void }) {
  return (
    <div className='relative h-[18.75rem]'>
      <Image
        className='md:absolute md:left-1/2 w-full m-auto md:translate-x-[-60%] md:w-[auto]'
        src='/crystal-ball.gif'
        width={350}
        height={350}
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
