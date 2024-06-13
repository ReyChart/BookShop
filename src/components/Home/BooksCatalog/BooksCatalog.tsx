'use client';

import { Fragment, FunctionComponent, useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { store } from '@/store/store';
import { getBooks } from '@/store/books/books.actions';
import { selectBooks, selectCategories, selectIsLoading } from '@/hooks/useSelect';

import BookItem from './BookItem/BookItem';
import Button from '@/components/Ui/Button/Button';
import SkeletonLoader from '@/components/Ui/Skeleton/SkeletonLoader';

import styles from './BooksCatalog.module.scss';

interface IAmountBooksProps {
  pageIndex: number;
  maxResults: number;
}

const BooksCatalog: FunctionComponent = () => {
  const { categories } = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  const books = useSelector(selectBooks);

  const limitItems = 36;
  const amountNewItems = 6;
  const initValueAmountBooks = useMemo<IAmountBooksProps>(
    () => ({
      pageIndex: 0,
      maxResults: 6,
    }),
    []
  );

  const [amountBooks, setAmountBooks] = useState<IAmountBooksProps>(initValueAmountBooks);

  useEffect(() => {
    amountBooks.maxResults < limitItems && store.dispatch(getBooks({ categories, ...amountBooks }));
  }, [categories, amountBooks]);

  useEffect(() => {
    setAmountBooks(initValueAmountBooks);
  }, [categories, initValueAmountBooks]);

  return (
    <div className={styles.books_catalog}>
      <div className={styles.books_list}>
        {books?.map((book, index) => (
          <Fragment key={index}>
            {isLoading && index >= amountBooks.pageIndex && index < amountBooks.maxResults ? (
              <SkeletonLoader className={styles.skeleton} inline count={1} height={307} />
            ) : (
              <BookItem book={book} />
            )}
          </Fragment>
        ))}
      </div>
      {amountBooks.maxResults < limitItems && !isLoading ? (
        <div className={styles.btn_load}>
          <Button
            onClick={() =>
              setAmountBooks((prev) => ({
                pageIndex: prev.pageIndex + amountNewItems,
                maxResults: prev.maxResults + amountNewItems,
              }))
            }
            disabled={isLoading}
          >
            Load more
          </Button>
        </div>
      ) : amountBooks.maxResults < limitItems && isLoading ? (
        <div>
          {[...Array(6)].map((_, index) => (
            <SkeletonLoader key={index} className={styles.skeleton} inline count={1} height={307} />
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default BooksCatalog;
