import { ReactNode } from 'react';
import Gnb from '../gnb/Gnb';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Gnb />
      <div className='flex items-center justify-center min-h-screen'>
        <main className='w-full lg:ml-[15.6rem] lg:pl-0 px-10'>{children}</main>
      </div>
    </div>
  );
}
