import { FunctionComponent, ReactNode } from 'react';
import Header from './Header/Header';

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
