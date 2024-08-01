import Image from 'next/image';
import { useState } from 'react';

export default function Rating() {
  const [rating, setRating] = useState(0);

  const handleRatingEnter = (idx: number) => {
    setRating(idx + 1);
  };

  const handleRatingLeave = () => {
    setRating(0);
  };

  return (
    <div className='flex gap-2 mt-5' onMouseLeave={handleRatingLeave}>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <Image
            className='cursor-pointer'
            key={idx}
            src={idx < rating ? '/star-on.png' : '/star.png'}
            width={35}
            height={35}
            alt='별점'
            onMouseEnter={() => handleRatingEnter(idx)}
          />
        ))}
    </div>
  );
}
