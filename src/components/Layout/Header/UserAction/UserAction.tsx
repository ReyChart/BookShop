'use client';

import { FunctionComponent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import styles from './UserAction.module.scss';

const UserAction: FunctionComponent = () => {
  const { push } = useRouter();

  return (
    <div className={styles.user_actions}>
      <button onClick={() => push('/profile')}>
        <Image src="/iconUser.svg" alt="user icon" width={12} height={15} />
      </button>
      <button onClick={() => push('/shopping-cart')}>
        <Image src="/iconShop.svg" alt="cart icon" width={14} height={17} />
      </button>
    </div>
  );
};

export default UserAction;
