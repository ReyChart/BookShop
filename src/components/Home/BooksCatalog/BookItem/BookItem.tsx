import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IBooksDataProps } from '@/app/api/books/route';
import { selectShoppingCartBooks, selectUser } from '@/hooks/useSelect';
import { useAction } from '@/hooks/useAction';
import { currency } from '@/utils/currency';
import Image from 'next/image';
import Button from '@/components/Ui/Button/Button';
import BookItemRating from './BookItemRating/BookItemRating';

import styles from './BookItem.module.scss';

const BookItem: FunctionComponent<{ book: IBooksDataProps }> = ({ book }) => {
  const {
    volumeInfo: { authors, title, description, imageLinks },
    saleInfo: { retailPrice },
  } = book;
  const shoppingCartBooks = useSelector(selectShoppingCartBooks);
  const { isLogin } = useSelector(selectUser);
  const { ADD_BOOK_CART, DELETE_BOOK_CART } = useAction();
  const [isCartBook, setIsCartBook] = useState<boolean>(false);

  const handleBtnClick = () => {
    isCartBook
      ? (DELETE_BOOK_CART(book), setIsCartBook(false))
      : (ADD_BOOK_CART(book), setIsCartBook(true));
  };

  useEffect(() => {
    if (
      shoppingCartBooks.filter(
        (cartBook) =>
          cartBook.volumeInfo.title === book.volumeInfo.title &&
          cartBook.volumeInfo.authors[0] === book.volumeInfo.authors[0]
      ).length
    ) {
      setIsCartBook(true);
    }
  }, [shoppingCartBooks, book]);

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
          {retailPrice ? `${currency(retailPrice.amount)}` : 'Price not available'}
        </div>
        <Button
          disabled={isLogin ? false : true}
          variant={isCartBook ? 'cart' : ''}
          onClick={handleBtnClick}
        >
          {isCartBook ? 'In the cart' : 'Buy now'}
        </Button>
      </div>
    </div>
  );
};

export default BookItem;
