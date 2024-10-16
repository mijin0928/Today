import { ReactNode } from 'react';
import Gnb from '../gnb/Gnb';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex'>
      <Gnb />
      <main className='w-full lg:w-[85%] px-10 lg:ml-[15.6rem] lg:pl-0'>{children}</main>
    </div>
  );
}
