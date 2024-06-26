'use client';

import { NextPage } from 'next';
import { selectUser } from '@/hooks/useSelect';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Button from '@/components/Ui/Button/Button';
import Layout from '@/components/Layout/Layout';

import styles from './page.module.scss';

const Profile: NextPage = () => {
  const { info } = useSelector(selectUser);

  return (
    <Layout>
      <main>
        <div className="container">
          <section className={styles.profile}>
            <div>
              <div className={styles.profile_info}>
                <h1>Profile</h1>
                <div>
                  <Image
                    src={'/profileImage.png'}
                    alt="profile"
                    width={235}
                    height={235}
                    priority={true}
                  />
                  <div>
                    <div className={styles.name}>
                      <h2>Your Name</h2>
                      <p>{info.name}</p>
                    </div>
                    <div>
                      <h2>Your Email</h2>
                      <p>{info.email}</p>
                    </div>
                    <Button>Edit profile</Button>
                  </div>
                </div>
              </div>
              <div className={styles.profile_about}>
                <h2>About me</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante consequat,
                  ornare nisi et, ultrices libero. Nunc nibh dolor, maximus quis auctor nec, tempor
                  quis ipsum. Proin mollis pellentesque nulla ac varius.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Profile;
