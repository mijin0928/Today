import Image from 'next/image';
import { useState } from 'react';

export default function Rating() {
  const [hoverRating, setHoverRating] = useState(0);
  const [hoverReview, setHoverReview] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedReview, setSelectedReview] = useState('');
  const isSelectedReview = hoverRating < selectedRating ? selectedReview : hoverReview;

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

  const handleRatingClick = (idx: number) => {
    setSelectedRating(idx + 1);
    setSelectedReview(hoverReview);
  };

  return (
    <div className='flex items-center gap-2 mt-5' onMouseLeave={handleRatingLeave}>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <Image
            className='cursor-pointer'
            key={idx}
            src={idx < hoverRating || idx < selectedRating ? '/star-on.png' : '/star.png'}
            width={35}
            height={35}
            alt='별점'
            onMouseEnter={() => handleRatingEnter(idx)}
            onClick={() => handleRatingClick(idx)}
          />
        ))}
      <p className='ml-1'>{isSelectedReview}</p>
    </div>
  );
}
