import type { ReactNode } from 'react';
import styles from './styles.module.scss';

type AppRootProps = {
  children: ReactNode;
};

const AppRoot = ({ children }: AppRootProps) => {
  return <main className={styles.pages_root}>{children}</main>;
};

export default AppRoot;
