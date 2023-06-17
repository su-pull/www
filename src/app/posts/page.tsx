import { Metadata } from 'next';
import getAllPosts from 'lib/getAllPosts';
import PostsData from 'components/PostsData';
import generateSEOData from 'lib/generateSEOData';
import Main from 'components/Main';

export const metadata: Metadata = generateSEOData({
  title: 'Posts',
  subtitle: 'posts articles',
  date: undefined,
});

async function getPosts() {
  const posts = await getAllPosts();
  return posts;
}

async function Page() {
  const posts = await getPosts();

  return (
    <Main>
      <PostsData posts={posts} />
    </Main>
  );
}

export default Page;
