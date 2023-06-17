import { ReactNode } from 'react';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import LazyMotion from 'components/Layout/LazyMotion';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <LazyMotion>
      <Header />
      {children}
      <Footer />
    </LazyMotion>
  );
};

export default Layout;
