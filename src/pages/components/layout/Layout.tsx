import { ReactNode } from 'react';
import Gnb from '../gnb/Gnb';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Gnb />
      <main className='p-[0_2rem_0_2rem] lg:p-0 lg:max-w-[78%] lg:m-[0_2rem_0_auto]'>{children}</main>
    </>
  );
}
