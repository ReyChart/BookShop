import { FunctionComponent } from 'react';
import { IBooksDataProps } from '@/app/api/books/route';
import Image from 'next/image';
import Button from '@/components/Ui/Button/Button';
import BookItemRating from './BookItemRating/BookItemRating';

import styles from './BookItem.module.scss';

const BookItem: FunctionComponent<{ book: IBooksDataProps }> = ({ book }) => {
  const {
    volumeInfo: { authors, title, description, imageLinks },
    saleInfo: { retailPrice },
  } = book;

  return (
    <div className={styles.book_card}>
      <Image
        src={imageLinks?.thumbnail || '/booksPlaceholder.png'}
        alt="Book Cover"
        className={styles.book_cover}
        width={212}
        height={307}
      />
      <div className={styles.book_info}>
        <p className={styles.book_author}>{authors?.join(', ') || 'Unknown Author'}</p>
        <h3 className={styles.book_title}>{title}</h3>
        <BookItemRating rating={4.3} reviews={333} />
        <p className={styles.book_description}>
          {description ? `${description.substring(0, 90)}...` : 'No description available'}
        </p>
        <div className={styles.book_price}>
          {retailPrice ? `$${retailPrice.amount}` : 'Price not available'}
        </div>
        <Button variant="cart">Buy now</Button>
      </div>
    </div>
  );
};

export default BookItem;
