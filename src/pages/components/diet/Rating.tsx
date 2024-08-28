import Image from 'next/image';
import { useState } from 'react';
import { RatingProps } from '@/type/type';

export default function Rating({ id, rating, review, updateItem }: RatingProps) {
  const [hoverRating, setHoverRating] = useState(0);
  const [hoverReview, setHoverReview] = useState('');
  const isSelectedReview = hoverRating < rating ? review : hoverReview;

  const handleRatingLeave = () => {
    setHoverRating(0);
    setHoverReview('');
  };

  const handleRatingEnter = (idx: number) => {
    setHoverRating(idx + 1);

    switch (idx + 1) {
      case 1:
        setHoverReview('맛없어요');
        break;
      case 2:
        setHoverReview('별로예요');
        break;
      case 3:
        setHoverReview('무난해요');
        break;
      case 4:
        setHoverReview('맛있어요');
        break;
      case 5:
        setHoverReview('정말 맛있어요');
        break;
    }
  };

  const handleRatingClick = (id: number, idx: number) => {
    updateItem(id, { rating: idx + 1, review: hoverReview });
  };

  return (
    <div className='md:flex md:items-center md:mt-5'>
      <div
        className='flex items-center justify-center gap-2 mt-5 mb-3 md:mb-0 md:mt-0'
        onMouseLeave={handleRatingLeave}
      >
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <Image
              className='cursor-pointer'
              key={idx}
              src={idx < hoverRating || idx < rating ? '/star-on.png' : '/star.png'}
              width={35}
              height={35}
              alt='별점'
              onMouseEnter={() => handleRatingEnter(idx)}
              onClick={() => handleRatingClick(id, idx)}
            />
          ))}
      </div>
      <p className='text-center ml-3'>{isSelectedReview}</p>
    </div>
  );
}
