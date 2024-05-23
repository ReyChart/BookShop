import { NextPage } from 'next';
import Layout from '@/components/Layout/Layout';

import styles from './page.module.scss';

const Profile: NextPage = () => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.profile}>
          <h1>Profile</h1>
        </section>
      </div>
    </Layout>
  );
};

export default Profile;
