import { NextPage } from 'next';
import Layout from '@/components/Layout/Layout';
import Slider from '@/components/Ui/Slider/Slider';
import Banners from '@/components/Home/Banners/Banners';
import Categories from '@/components/Home/Categories/Categories';
import BooksCatalog from '@/components/Home/BooksCatalog/BooksCatalog';

import styles from './page.module.scss';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.slider}>
          <Slider />
          <Banners />
        </section>
        <section className={styles.books}>
          <Categories />
          <BooksCatalog />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
