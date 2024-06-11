import { FunctionComponent } from 'react';
import BookItemRating from '@/components/Home/BooksCatalog/BookItem/BookItemRating/BookItemRating';
import Image from 'next/image';

import styles from './ShoppingCartTable.module.scss';

const tableTitle = ['item', 'quantity', 'price', 'delivery'];

const ShoppingCartTable: FunctionComponent = () => {
  return (
    <div className={styles.table}>
      {tableTitle.map((title) => (
        <div key={title} className={styles.column}>
          <h4>{title}</h4>
          <div className={styles.row}>
            {title === 'item' && (
              <div className={styles.items}>
                <Image src="/booksPlaceholder.png" alt="Book Cover" width={102} height={145} />
                <div>
                  <h3>Book Title</h3>
                  <p>Author Name</p>
                  <BookItemRating rating={4.3} reviews={333} />
                </div>
              </div>
            )}
            {title === 'quantity' && (
              <div className={styles.quantity}>
                <button className={styles.minus}></button>
                <span>1</span>
                <button className={styles.plus}></button>
              </div>
            )}
            {title === 'price' && <p className={styles.price}>$19.99</p>}
            {title === 'delivery' && <p className={styles.delivery}>Shipping: delivery</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCartTable;
