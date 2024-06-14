'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import { IBooksDataProps } from '../api/books/route';
import { useAction } from '@/hooks/useAction';

export interface INewBookDataProps extends IBooksDataProps {
  quantity: number;
  bookPrice: number | string;
}

export const useShoppingCart = (bookData: IBooksDataProps[]) => {
  const [newBookData, setNewBookData] = useState<INewBookDataProps[]>(
    bookData.map((book) => ({
      ...book,
      quantity: 1,
      bookPrice: book.saleInfo.retailPrice?.amount || 'No price',
    }))
  );
  const [totalPrice, setTotalPrice] = useState<number>(
    bookData.reduce((acc: number, book) => {
      return acc + (book.saleInfo.retailPrice?.amount ? book.saleInfo.retailPrice?.amount : 0);
    }, 0)
  );
  const { DELETE_BOOK_CART } = useAction();

  const handleChangeQuantity = useCallback(
    (variant: string, book: INewBookDataProps) => {
      if (variant === 'decrement' && book.quantity === 1) {
        DELETE_BOOK_CART(book);
        setNewBookData((prev) =>
          prev.filter(
            (item) =>
              item.volumeInfo.title !== book.volumeInfo.title ||
              item.volumeInfo.authors !== book.volumeInfo.authors
          )
        );
        return;
      }

      setNewBookData((prev) => {
        return prev.map((item) => {
          if (
            item.volumeInfo.authors === book.volumeInfo.authors &&
            item.volumeInfo.title === book.volumeInfo.title
          ) {
            if (variant === 'decrement') {
              item = { ...item, quantity: item.quantity - 1 };
            } else if (variant === 'increment') {
              item = { ...item, quantity: item.quantity + 1 };
            }
            item.bookPrice =
              item.saleInfo.retailPrice?.amount !== undefined
                ? (item.saleInfo.retailPrice.amount || 0) * item.quantity
                : 'No price';
          }
          return item;
        });
      });
    },
    [DELETE_BOOK_CART]
  );

  useEffect(() => {
    setTotalPrice(
      newBookData.reduce((acc: number, book) => {
        return (
          acc +
          (book.saleInfo.retailPrice?.amount ? book.saleInfo.retailPrice?.amount : 0) *
            book.quantity
        );
      }, 0)
    );
  }, [newBookData]);

  return useMemo(
    () => ({ newBookData, totalPrice, handleChangeQuantity }),
    [newBookData, totalPrice, handleChangeQuantity]
  );
};
