import { ReactNode } from 'react';
import Gnb from '../gnb/Gnb';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Gnb />
      <main className='relative p-[0_2rem_0_2rem] lg:max-w-[78%] lg:m-[0_2rem_0_auto]'>{children}</main>
    </>
  );
}
