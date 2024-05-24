'use client';

import { FunctionComponent, useState } from 'react';
import BookItem from './BookItem/BookItem';
import Button from '@/components/Ui/Button/Button';

import styles from './BooksCatalog.module.scss';

const BooksCatalog: FunctionComponent = () => {
  const [booksCount, setBooksCount] = useState<number>(6);
  const maxBooks = 36;

  const handleLoadMore = () => {
    setBooksCount((prevCount) => Math.min(prevCount + 6, maxBooks));
  };

  return (
    <div className={styles.books_catalog}>
      <div className={styles.books_list}>
        {Array.from({ length: booksCount }).map((_, index) => (
          <BookItem key={index} />
        ))}
      </div>
      {booksCount < maxBooks && (
        <div className={styles.btn_load}>
          <Button variant="cart" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default BooksCatalog;
