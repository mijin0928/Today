import '@/styles/globals.css';
import { nanum_Gothic, fredoka, poor_Story, cls } from '@/styles/font';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  
  return (
    <div className={cls(nanum_Gothic.className, fredoka.variable, poor_Story.variable)}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}
