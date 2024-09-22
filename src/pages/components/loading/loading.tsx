import Image from 'next/image';

export default function Loading() {
  return (
    <Image
      className='absolute left-1/2 top-full translate-x-[-50%]'
      src='/loading.gif'
      width={150}
      height={150}
      alt='로딩'
    />
  );
}
