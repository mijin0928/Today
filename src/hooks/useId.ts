import { useState, useRef } from 'react';

export function useId() {
  const [id, setId] = useState(0);
  const countRef = useRef(1);

  const onId = () => {
    setId(countRef.current++);
  };

  return { id, onId };
}
