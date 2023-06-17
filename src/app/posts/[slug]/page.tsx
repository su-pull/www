import { Metadata } from 'next';
import Params from 'types/Params';
import getPostData from 'lib/getPostData';
import getSlugPath from 'lib/getSlugPath';
import generateSEOData from 'lib/generateSEOData';
import PostData from 'components/PostData';
import Main from 'components/Main';

const getPost = async (slug: string) => {
  const post = await getPostData(slug);
  return post;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPost(params.slug);
  return generateSEOData({ title: post.title, subtitle: post.subtitle, date: post.date });
}

async function Page({ params }: Params) {
  const post = await getPost(params.slug);

  return (
    <Main>
      <PostData post={post} />
    </Main>
  );
}

export async function generateStaticParams() {
  const posts = await getSlugPath();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default Page;
