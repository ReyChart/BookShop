import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './Banners.module.scss';

interface IBannersProps {
  title: string;
  variant: string;
}

const bannersEl: IBannersProps[] = [
  { title: 'Change old book on new', variant: 'purple-block' },
  { title: 'Top 100 books 2022', variant: 'pink-block' },
];

const Banners: FunctionComponent = () => {
  return (
    <div className={styles.banners_wrapper}>
      {bannersEl.map((banner) => (
        <Link href="#" key={banner.variant}>
          <div
            className={clsx(styles.banner, {
              [styles.banner_purple]: banner.variant === 'purple-block',
              [styles.banner_pink]: banner.variant === 'pink-block',
            })}
          >
            {banner.title}
            <Image src="/arrowBanner.svg" alt="arrow right" width={50} height={12} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Banners;
