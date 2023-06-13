import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';

export const metadata: Metadata = generateSEOData({ title: 'Home', subtitle: 'About', date: '1994' });

const Page = (): JSX.Element => {
  return (
    <>
      <p>
        I am a person who designs and creates software in Tokyo.
        <br />I like to work on
        <a href="https://works.su-pull.net/"> my-projects</a> and I want to be part of newest and most advanced areas.
      </p>
      <h1>I history</h1>
      <ul>
        <li>1994 born in Kitakyushu, Fukuoka, Japan</li>
        <li>2014 traveled to the USA, Seattle, and Canada</li>
        <li>2016-2017 worked PC DEPOT Co. Ltd.</li>
        <li>2018 passed the high school equivalency exam</li>
        <li>2019-2020 self studied design</li>
        <li>2021 started learning programming and git</li>
        <li>2022 built a REST and Graph API</li>
        <li>2023 made juster and react-page-fitter</li>
      </ul>
    </>
  );
};

export default Page;
