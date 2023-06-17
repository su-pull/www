'use client';

import { AnimatePresence, m } from 'framer-motion';
import { useState } from 'react';
import { useMail } from 'hooks/useMail';
import RouterBack from 'components/RouterBack';
import Image from 'next/image';
import profilePic from '@public/alum.png';
import styles from './styles.module.scss';

const MailForm = (): JSX.Element => {
  const { mail, setMail, name, setName, message, setMessage, Submit } = useMail();
  const [error, setError] = useState<undefined | boolean>(undefined);
  const [isSended, setIsSended] = useState(false);
  const Send = async (): Promise<void> => {
    if (isSended) return;
    const isValid = validateEmail(mail);
    setIsSended(isValid && true);
    setError(!isValid);
    isValid &&
      (await Submit(),
      setTimeout(() => {
        setMail(''), setName(''), setMessage('');
      }, 1400));
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex.test(email);
  };

  const MailFormDom = (
    <form>
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
        <label htmlFor="status" className={styles.error_style}>
          {error === undefined ? '' : error === false ? 'complete' : '*email is required for available'}
        </label>
      </m.div>

      <label htmlFor="name">Name*</label>
      <div className={styles.area_container}>
        <input
          value={name}
          type="text"
          name="name"
          aria-label="Name area"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <label htmlFor="email">Mail*</label>
      <div className={styles.area_container}>
        <input
          value={mail}
          type="text"
          name="name"
          aria-label="Name area"
          onChange={(e) => setMail(e.target.value)}
          required
        />
      </div>

      <label htmlFor="massage">Message*</label>
      <div className={styles.area_container}>
        <textarea
          value={message}
          name="massage"
          aria-label="Massage area"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="button" disabled={error} onClick={Send} className={styles.massageButton}>
        {error === undefined ? 'Submit' : error === false ? 'Success!' : 'Retry!'}
      </button>
    </form>
  );

  return (
    <div className={styles.mobile_width}>
      <RouterBack />
      <div className={styles.fit_icons}>
        <Image
          className={styles.visited_icon}
          src={profilePic}
          priority
          alt="art"
          quality={100}
          width={80}
          height={80}
        />
        <div className={styles.success}>success!!</div>
      </div>
      {error === undefined ? (
        <AnimatePresence mode="wait">{error === undefined && <m.div>{MailFormDom}</m.div>}</AnimatePresence>
      ) : error === false ? (
        <AnimatePresence mode="wait">
          {!error && (
            <m.div
              key="1"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {MailFormDom}
            </m.div>
          )}
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          {error && (
            <m.div
              key="2"
              onClick={() => setError(undefined)}
              animate={{ y: -4, transition: { type: 'spring', duration: 1, bounce: 1 } }}
              exit={{ y: 0 }}
            >
              {MailFormDom}
            </m.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default MailForm;
