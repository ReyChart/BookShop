import { useEffect, useMemo, useState } from 'react';

export const useSlider = (imageData: string[]) => {
  const [activeSlideElm, setActiveSlideElm] = useState<number>(0);

  const handleDotsClick = (index: number) => {
    setActiveSlideElm(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      activeSlideElm < imageData.length - 1
        ? setActiveSlideElm((prev) => ++prev)
        : setActiveSlideElm(0);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [activeSlideElm, imageData.length]);

  return useMemo(
    () => ({
      activeSlideElm,
      handleDotsClick,
    }),
    [activeSlideElm]
  );
};
