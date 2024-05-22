import { FunctionComponent } from 'react';
import Button from '@/components/Ui/Button/Button';
import Image from 'next/image';

import styles from './BookItem.module.scss';

const BookItem: FunctionComponent = () => {
  const rating = 4.3;
  const roundedRating = Math.round(rating);
  const reviews = '333 reviews';

  return (
    <div className={styles.book_card}>
      <Image
        src="/booksPlaceholder.png"
        alt="Book Cover"
        className={styles.book_cover}
        width={212}
        height={307}
      />
      <div className={styles.book_info}>
        <p className={styles.book_author}>Author Name</p>
        <h3 className={styles.book_title}>Book Title</h3>
        <div className={styles.book_rating}>
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={index < roundedRating ? styles.full_star : styles.empty_star}
            >
              {index < roundedRating ? '★' : '☆'}
            </span>
          ))}
          <span className={styles.book_reviews}>{reviews}</span>
        </div>
        <p className={styles.book_description}>
          This is a placeholder description for the book. It provides a brief overview of the books
          content.
        </p>
        <div className={styles.book_price}>$19.99</div>
        <Button>Buy now</Button>
      </div>
    </div>
  );
};

export default BookItem;
