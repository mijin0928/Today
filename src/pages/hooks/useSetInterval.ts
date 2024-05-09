import { useEffect, useRef } from 'react';

export default function useSetInterval(callback: () => void, seconds: number) {
  const timerRef = useRef<string | number | NodeJS.Timeout | undefined>();

  useEffect(() => {
    timerRef.current = setInterval(callback, seconds);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return timerRef;
}
