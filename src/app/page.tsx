import { NextPage } from 'next';
import Layout from '@/components/Layout/Layout';
import Slider from '@/components/Ui/Slider/Slider';
import Banners from '@/components/Home/Banners/Banners';

import styles from './page.module.scss';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.slider}>
          <Slider />
          <Banners />
        </section>
        <section className={styles.books}></section>
      </div>
    </Layout>
  );
};

export default Home;
