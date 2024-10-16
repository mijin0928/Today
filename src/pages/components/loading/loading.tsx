import Image from 'next/image';

export default function Loading() {
  return (
    <div className='h-[36.8rem]'>
      <Image
        className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'
        src='/loading.gif'
        width={150}
        height={150}
        alt='로딩'
      />
    </div>
  );
}
