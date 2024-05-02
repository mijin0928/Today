import { Nanum_Gothic, Fredoka } from 'next/font/google';

export const nanum_Gothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400'],
});

export const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--fredoka'
});

export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};
