import { Nanum_Gothic, Fredoka, Poor_Story } from 'next/font/google';

export const nanum_Gothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--fredoka'
});

export const poor_Story = Poor_Story({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--poor_Story'
});

export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};
