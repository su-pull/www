import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from 'components/Layout';

type Provider = {
  children: ReactNode;
};

const AppProvider = ({ children }: Provider): JSX.Element => {
  return (
    <Layout>
      <Analytics mode={'production'} />
      {children}
    </Layout>
  );
};

export default AppProvider;
