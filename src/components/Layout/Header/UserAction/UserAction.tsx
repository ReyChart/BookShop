'use client';

import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectUser } from '@/hooks/useSelect';
import { useAction } from '@/hooks/useAction';
import Image from 'next/image';
import Link from 'next/link';
import Auth from '@/components/Ui/Auth/Auth';

import styles from './UserAction.module.scss';

const userActionsProfile = ['Profile', 'Log out'];

const UserAction: FunctionComponent = () => {
  const { isLogin } = useSelector(selectUser);
  const { LOGOUT } = useAction();
  const [isShowAuth, setIsShowAuth] = useState<boolean>(false);
  const authRef = useRef<HTMLDivElement | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (authRef.current && !authRef.current.contains(e.target as Node)) {
        setIsShowAuth(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsShowAuth(false);
  }, [isLogin]);

  return (
    <div className={styles.user_actions}>
      <div ref={authRef} className={styles.auth}>
        <button onClick={() => setIsShowAuth(!isShowAuth)}>
          <Image src="/iconUser.svg" alt="user" width={14} height={17} />
        </button>
        {isShowAuth && !isLogin && <Auth title="Log in" />}
        {isLogin && isShowAuth && (
          <ul>
            {userActionsProfile.map((item) => (
              <li key={item}>
                <Link
                  href={item.toLowerCase() === 'profile' ? '/profile' : '/'}
                  onClick={() => {
                    if (item.toLowerCase() === 'log out') {
                      LOGOUT({ name: '', email: '' });
                    }
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={() => push('/shopping-cart')}>
        <Image src="/iconShop.svg" alt="shop-bag" width={14} height={17} />
        <span className={styles.counter}>0</span>
      </button>
    </div>
  );
};

export default UserAction;
