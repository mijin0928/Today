import { useEffect } from 'react';

export default function useSetInterval(callback: () => void, seconds: number) {
  useEffect(() => {
    const timer = setInterval(callback, seconds);

    return () => {
      clearInterval(timer);
    };
  }, []);
}
