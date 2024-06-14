'use client';

import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { selectShoppingCartBooks, selectUser } from '@/hooks/useSelect';
import { useShoppingCart } from './useShoppingCart';
import { currency } from '@/utils/currency';
import Layout from '@/components/Layout/Layout';
import ShoppingCartTable from './table/ShoppingCartTable';
import Button from '@/components/Ui/Button/Button';

import styles from './page.module.scss';

const ShoppingCart: NextPage = () => {
  const { isLogin } = useSelector(selectUser);
  const shoppingCartBooks = useSelector(selectShoppingCartBooks);
  const shoppingCartProps = useShoppingCart(shoppingCartBooks);

  return (
    <Layout>
      <main>
        <div className="container">
          <section className={styles.shopping_cart}>
            <h1>Shopping Cart</h1>
            <ShoppingCartTable {...shoppingCartProps} />
            <div>
              <h2>{`Total price: ${currency(shoppingCartProps.totalPrice)}`}</h2>
              <Button disabled={isLogin ? false : true}>Checkout</Button>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default ShoppingCart;
