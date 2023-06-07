import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

type AdjusterProps = {
  children: ReactNode;
};

const PageRoot = ({ children }: AdjusterProps): JSX.Element => {
  const pathname = usePathname();

  return (
    <main className={`${styles.pages_root} ${pathname.includes('/posts/') && styles.slug_margin_top}`}>{children}</main>
  );
};

export default PageRoot;
