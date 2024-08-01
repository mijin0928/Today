import Image from 'next/image';
import { useState } from 'react';

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingEnter = (idx: number) => {
    setRating(idx + 1);

    switch (idx + 1) {
      case 1:
        setReview('맛없어요');
        break;
      case 2:
        '별로예요';
        setReview('별로예요');
        break;
      case 3:
        setReview('무난해요');
        break;
      case 4:
        setReview('맛있어요');
        break;
      case 5:
        setReview('정말 맛있어요');
        break;
    }
  };

  const handleRatingLeave = () => {
    setRating(0);
    setReview('');
  };

  return (
    <div className='flex items-center gap-2 mt-5' onMouseLeave={handleRatingLeave}>
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
      <p className='ml-1'>{review}</p>
    </div>
  );
}
