'use client';

import { FunctionComponent, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import UserAction from './UserAction/UserAction';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './Header.module.scss';

const navItems = ['books', 'audiobooks', 'stationery & gifts', 'blog'];

const Header: FunctionComponent = () => {
  const [isNavActive, setIsNavActive] = useState<boolean>(false);
  const [activeNavItem, setActiveNavItem] = useState<string>('books');
  const [LogoDisabled, setLogoDisabled] = useState<boolean>(true);

  const pathname = usePathname();

  const handleLogoClick = () => {
    setActiveNavItem('books');
    setLogoDisabled(true);
  };

  const handleNavLinkClick = (navItem: string) => {
    setActiveNavItem(navItem);
    setLogoDisabled(navItem === 'books');
  };

  const toggleBurgerMenu = () => {
    setIsNavActive(!isNavActive);
  };

  useEffect(() => {
    if (pathname === '/shopping-cart' || pathname === '/profile') {
      setLogoDisabled(false);
      setActiveNavItem('');
    }
  }, [pathname]);

  return (
    <header>
      <div className="container">
        <div className={styles.header_wrapper}>
          <Link
            href="/"
            className={clsx(styles.header_logo, {
              [styles.disabled]: LogoDisabled,
            })}
            onClick={handleLogoClick}
          >
            BookShop
          </Link>
          <nav className={clsx(styles.nav, { [styles.active]: isNavActive })}>
            <ul className={styles.nav_list}>
              {navItems.map((navItem) => (
                <li key={navItem}>
                  <Link
                    href={navItem !== 'books' ? `/#${navItem}` : '/'}
                    className={clsx(styles.nav_link, {
                      [styles.active]: activeNavItem === navItem,
                    })}
                    onClick={() => handleNavLinkClick(navItem)}
                  >
                    {navItem}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <UserAction />
          <button
            className={clsx(styles.burger_menu, { [styles.active]: isNavActive })}
            type="button"
            onClick={toggleBurgerMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
