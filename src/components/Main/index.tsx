'use client';

import { AnimatePresence, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import useFitter from 'react-page-fitter';
import styles from './styles.module.scss';

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps): JSX.Element => {
  const pathname = usePathname();
  const isFit = useFitter('main', pathname);
  const variants = {
    hidden: { opacity: 0, y: 0 },
    enter: { opacity: 1, y: isFit ? 0 : -40 },
  };

  return (
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
      <m.main
        key={pathname}
        variants={variants}
        animate="enter"
        initial="hidden"
        transition={{ duration: 0.8 }}
        className={styles.pages_root}
      >
        {children}
      </m.main>
    </AnimatePresence>
  );
};

export default Main;
