import MailForm from 'components/MailForm';
import generateSEOData from 'lib/generateSEOData';
import { Metadata } from 'next';
import Main from 'components/Main';

export const metadata: Metadata = generateSEOData({
  title: 'Mail',
  subtitle: 'mail form',
  date: undefined,
});

const Mail = (): JSX.Element => {
  return (
    <Main>
      <MailForm />
    </Main>
  );
};

export default Mail;
