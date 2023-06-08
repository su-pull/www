'use client';

import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from 'components/Layout';
import PageRoot from 'components/PageRoot';

type Provider = {
  children: ReactNode;
};

const AppProvider = ({ children }: Provider): JSX.Element => {
  return (
    <Layout>
      <Analytics mode={'production'} />
      <PageRoot>{children}</PageRoot>
    </Layout>
  );
};

export default AppProvider;
