import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import styles from './styles.module.scss';

const Text = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <Fragment>
      <div className={styles.Text} key={pathname}>
        {pathname == '/' ? 'Home' : pathname.slice(1).replace(/^[a-z]/, (char) => char.toUpperCase())}
      </div>
    </Fragment>
  );
};

export default Text;
