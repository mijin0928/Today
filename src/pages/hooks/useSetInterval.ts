import { useEffect, useRef } from 'react';

export function useSetInterval(callback: () => void, seconds: number) {
  const timerRef = useRef<string | number | NodeJS.Timeout | undefined>();

  useEffect(() => {
    timerRef.current = setInterval(callback, seconds);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return timerRef;
}
