import { FunctionComponent } from 'react';

import styles from './BookItemRating.module.scss';

const BookItemRating: FunctionComponent<{ rating: number; reviews: number }> = ({
  rating,
  reviews,
}) => {
  const roundedRating = Math.round(rating);

  return (
    <div className={styles.book_rating}>
      <div className={styles.stars}>
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z"
              fill={index < roundedRating ? '#F2C94C' : '#EEEDF5'}
            />
          </svg>
        ))}
      </div>
      <div className={styles.reviews}>{reviews} reviews</div>
    </div>
  );
};

export default BookItemRating;
