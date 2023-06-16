import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

const Text = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <div className={styles.Text}>
      {pathname == '/' ? 'About' : pathname.slice(1).replace(/^[a-z]/, (char) => char.toUpperCase())}
    </div>
  );
};

export default Text;
