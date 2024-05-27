import { NextResponse } from 'next/server';

export interface IBooksDataProps {
  volumeInfo: {
    authors: string[];
    title: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
  saleInfo: {
    retailPrice: {
      amount: number;
    };
  };
}

interface IDataProps {
  items: IBooksDataProps[];
}

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const subject = url.searchParams.get('subject');
  const pageIndex = url.searchParams.get('pageIndex');
  const maxResults = url.searchParams.get('maxResults');
  const printType = 'books';
  const langRestrict = 'en';
  const filter = 'paid-ebooks';
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

  if (!subject) {
    return NextResponse.json({ message: 'No subject in query params' }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&pageIndex=${pageIndex}&maxResults=${maxResults}&printType=${printType}&langRestrict=${langRestrict}&filter=${filter}&key=${API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const { items: data } = (await res.json()) as IDataProps;

    if (!data) {
      return NextResponse.json({ message: 'No books found' }, { status: 404 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Failed to fetch books' }, { status: 500 });
  }
};
