import Image from 'next/image';

export default function Ball({ handleHandOver }: { handleHandOver: () => void }) {
  return (
    <div className='relative'>
      <Image
        className='m-auto sm:w-auto sm:translate-x-[-7rem] w-full'
        src='/crystal-ball.gif'
        width={400}
        height={400}
        alt='마법구슬'
        priority
        onMouseOver={handleHandOver}
      />
      <Image
        className='hidden sm:block sm:absolute sm:top-10 sm:left-1/2 sm:translate-x-[-1rem]'
        src='/wizard.png'
        width={300}
        height={300}
        alt='마법사'
      />
    </div>
  );
}
