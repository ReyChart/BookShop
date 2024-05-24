import { FunctionComponent } from 'react';
import BookItemRating from './BookItemRating/BookItemRating';
import Button from '@/components/Ui/Button/Button';
import Image from 'next/image';

import styles from './BookItem.module.scss';

const BookItem: FunctionComponent = () => {
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
        <BookItemRating />
        <p className={styles.book_description}>
          This is a placeholder description for the book. It provides a brief overview of the books
          content.
        </p>
        <div className={styles.book_price}>$19.99</div>
        <Button variant="cart">Buy now</Button>
      </div>
    </div>
  );
};

export default BookItem;
