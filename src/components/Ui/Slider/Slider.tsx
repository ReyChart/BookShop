'use client';

import { Fragment, FunctionComponent } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './Slider.module.scss';
import { useSlider } from './useSlider';

const imageData = [
  '/welcomeBannerFirst.png',
  '/welcomeBannerSecond.png',
  '/welcomeBannerThird.png',
];

const Slider: FunctionComponent = () => {
  const { activeSlideElm, handleDotsClick } = useSlider(imageData);

  return (
    <div className={styles.slider_wrapper}>
      <div className={styles.img_wrapper}>
        {imageData.map((image, index) => (
          <Fragment key={index}>
            {index === activeSlideElm && (
              <Image src={image} alt="slider image" width={1120} height={702} priority={true} />
            )}
          </Fragment>
        ))}
      </div>
      <div className={styles.dote_wrapper}>
        {imageData.map((_, index) => (
          <button
            className={clsx('', {
              [styles.active]: index === activeSlideElm,
            })}
            key={index}
            onClick={() => handleDotsClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
