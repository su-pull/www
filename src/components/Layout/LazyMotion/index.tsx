'use client';

import { domAnimation, LazyMotion } from 'framer-motion';
import { ReactNode } from 'react';

type LazyMotionProps = {
  children: ReactNode;
};

const LazyWrap = ({ children }: LazyMotionProps) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default LazyWrap;
