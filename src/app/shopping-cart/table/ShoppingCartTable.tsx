import { FunctionComponent } from 'react';
import { INewBookDataProps } from '../useShoppingCart';
import { currency } from '@/utils/currency';
import BookItemRating from '@/components/Home/BooksCatalog/BookItem/BookItemRating/BookItemRating';
import Image from 'next/image';

import styles from './ShoppingCartTable.module.scss';

interface IShoppingCartTableProps {
  newBookData: INewBookDataProps[];
  handleChangeQuantity: (variant: string, book: INewBookDataProps) => void;
}

const tableTitle = ['item', 'quantity', 'price', 'delivery'];

const ShoppingCartTable: FunctionComponent<IShoppingCartTableProps> = ({
  newBookData: bookData,
  handleChangeQuantity,
}) => {
  return (
    <div className={styles.table}>
      {tableTitle.map((title) => (
        <div key={title} className={styles.column}>
          <h4>{title}</h4>
          {bookData.map((book, index) => (
            <div key={index} className={styles.row}>
              {title === 'item' && (
                <div className={styles.items}>
                  <Image
                    src={
                      book.volumeInfo.imageLinks?.thumbnail
                        ? book.volumeInfo.imageLinks.thumbnail
                        : '/booksPlaceholder.png'
                    }
                    alt="Book Cover"
                    width={102}
                    height={145}
                  />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    {book.volumeInfo.authors?.length ? (
                      <h4>
                        {book.volumeInfo.authors.map((author, idx) =>
                          idx === book.volumeInfo.authors.length - 1 ? author : `${author}, `
                        )}
                      </h4>
                    ) : (
                      ''
                    )}
                    <BookItemRating rating={4.3} reviews={333} />
                  </div>
                </div>
              )}
              {title === 'quantity' && (
                <div className={styles.quantity}>
                  <button
                    onClick={() => handleChangeQuantity('decrement', book)}
                    className={styles.minus}
                  ></button>
                  <span>{book.quantity}</span>
                  <button
                    onClick={() => handleChangeQuantity('increment', book)}
                    className={styles.plus}
                  ></button>
                </div>
              )}
              {title === 'price' && (
                <p className={styles.price}>
                  {typeof book.bookPrice === 'number' ? currency(book.bookPrice) : book.bookPrice}
                </p>
              )}
              {title === 'delivery' && <p className={styles.delivery}>Shipping: delivery</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShoppingCartTable;
