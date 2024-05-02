import '@/styles/globals.css';
import { nanum_Gothic, fredoka, cls } from '@/styles/font';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cls(nanum_Gothic.className, fredoka.variable)}>
      <Component {...pageProps} />;
    </div>
  );
}
