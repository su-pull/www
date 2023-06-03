import { Metadata } from 'next';
import Image from 'next/image';
import profilePic from '@public/alum.png';
import generateSEOData from 'lib/generateSEOData';

export const metadata: Metadata = generateSEOData({ title: 'Home', subtitle: 'About', date: '1994' });

const Page = (): JSX.Element => {
  return (
    <>
      <Image className="main_icon" src={profilePic} alt="icon" quality={100} width={80} height={80} />
      <p className="p__width">
        I am a designer developer based in Tokyo. <br />I spend my time on the{' '}
        <a href="https://works.su-pull.net/">projects</a>, I was self taught drawing and design, My incentive is to be
        involved in the most cutting-edge the fields.
      </p>
      <hr />
      <h1>Career</h1>
      <ul>
        <li>1994 born in Kitakyushu, Fukuoka, Japan</li>
        <li>2014 traveled to the USA, Seattle, and Canada</li>
        <li>2016-2017 worked PC DEPOT Co. Ltd.</li>
        <li>2018 passed the high school equivalency exam</li>
        <li>2019-2020 self studied design</li>
        <li>2021 started learning programming and git</li>
        <li>2022 built a REST and Graph API</li>
        <li>2023 feedback JS experimental framework</li>
      </ul>
    </>
  );
};

export default Page;
