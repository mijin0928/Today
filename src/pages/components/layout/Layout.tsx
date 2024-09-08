import { ReactNode } from 'react';
import Gnb from '../gnb/Gnb';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Gnb />
      <main className='px-8 pt-2 pb-8 lg:w-[85%] lg:absolute lg:right-0'>{children}</main>
    </>
  );
}
