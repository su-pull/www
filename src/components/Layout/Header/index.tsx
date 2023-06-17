'use client';

import Text from 'components/Layout/Text';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import isCurrentLink from 'lib/isCurrentLink';
import Link from 'next/link';
import { AnimatePresence, m } from 'framer-motion';
import styles from './styles.module.scss';
import { RiQuillPenLine, RiHome4Line } from 'react-icons/ri';
import useFitter from 'react-page-fitter';

const Header = (): JSX.Element => {
  const pathname = usePathname();
  const postsRoot = pathname.includes('/posts/') || pathname === '/mail';
  const isFit = useFitter('main', pathname);
  const isFrame = postsRoot || !isFit;
  const Headers: { name: string; href: string; icon: JSX.Element }[] = useMemo(
    () => [
      {
        name: 'Posts',
        href: '/posts',
        icon: <RiQuillPenLine className={styles.icon_position} size={12} />,
      },
      {
        name: 'About',
        href: '/',
        icon: <RiHome4Line className={styles.icon_position} size={12} />,
      },
    ],
    []
  );

  return (
    <AnimatePresence>
      <m.header
        key={pathname}
        animate={{
          opacity: isFrame ? 0 : 1,
          pointerEvents: isFrame ? 'none' : 'auto',
        }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={styles.header__main}
      >
        <Text />
        <nav className={styles.header__nav}>
          <ul className={styles.header__ul}>
            {Headers.map(({ name, href, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.link_container} ${isCurrentLink(href, pathname) && styles.after_color}`}
                >
                  {icon} {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </m.header>
    </AnimatePresence>
  );
};

export default Header;
