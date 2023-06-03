import getAllPosts from 'lib/getAllPosts';

const getPosts = async () => {
  const posts = await getAllPosts();
  return posts;
};

export async function GET() {
  const posts = await getPosts();
  const URL = process.env.PROD_URL;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>
          <![CDATA[su-pull]]>
        </title>
        <description>
          <![CDATA[the 2xxx year fight of my load]]>
        </description>
        <link>${URL}</link>
        <generator>Next.js Route Handlers</generator>
        <lastBuildDate>${posts[0].date}</lastBuildDate>  
        <atom:link href="${URL}/feed.xml" rel="self" type="application/rss+xml"/>
        ${posts
          .map(
            (post) => `
              <item>
                <title>
                  <![CDATA[ ${post.title} ]]>
                </title>
                <description>
                  <![CDATA[ ${post.subtitle} ]]>
                </description>
                <link>/${post.slug}</link>
                <guid isPermaLink="true">/${post.slug}</guid>
                <pubDate>${post.date}</pubDate>
              </item>
            `
          )
          .join('')}
      </channel>
    </rss>`;
  return new Response(xml, { headers: { 'content-type': 'application/xml' } });
}
