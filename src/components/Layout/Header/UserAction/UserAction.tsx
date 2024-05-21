'use client';

import { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './UserAction.module.scss';

const UserAction: FunctionComponent = () => {
  return (
    <div className={styles.user_actions}>
      <button type="button" disabled>
        <Image src="/iconUser.svg" alt="user icon" width={12} height={15} />
      </button>
      <button type="button" disabled>
        <Image src="/iconShop.svg" alt="cart icon" width={14} height={17} />
      </button>
    </div>
  );
};

export default UserAction;
