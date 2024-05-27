import { useEffect, useRef } from 'react';
<<<<<<< title

export function useSetInterval(callback: () => void, seconds: number) {
  const timerRef = useRef<string | number | NodeJS.Timeout | undefined>();

=======

export default function useSetInterval(callback: () => void, seconds: number) {
  const timerRef = useRef<string | number | NodeJS.Timeout | undefined>();

>>>>>>> main
  useEffect(() => {
    timerRef.current = setInterval(callback, seconds);

    return () => {
<<<<<<< title
      clearInterval(timerRef.current);
=======
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
>>>>>>> main
    };
  }, []);

  return timerRef;
}
