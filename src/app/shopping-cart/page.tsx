import { NextPage } from 'next';
import Layout from '@/components/Layout/Layout';
import ShoppingCartTable from './table/ShoppingCartTable';
import Button from '@/components/Ui/Button/Button';

import styles from './page.module.scss';

const ShoppingCart: NextPage = () => {
  return (
    <Layout>
      <main>
        <div className="container">
          <section className={styles.shopping_cart}>
            <h1>Shopping Cart</h1>
            <ShoppingCartTable />
            <div>
              <h2>Total price: 30.58$</h2>
              <Button variant="cart">Checkout</Button>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default ShoppingCart;
