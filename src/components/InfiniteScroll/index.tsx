'use client';

import Link from 'next/link';
import { Fragment, useEffect, useCallback } from 'react';
import useSWRInfinite from 'swr/infinite';
import getKey from 'lib/getKey';
import InfiniteScroll from 'react-infinite-scroll-component';
import pageSize from 'lib/pageSize';
import PostsData from 'types/PostsData';
import PostsProps from 'types/PostsProps';
import styles from './styles';

const Infinite = ({ posts }: PostsProps): JSX.Element => {
  // isValidating and Spinner UI is seamless ux.
  const { data, size, setSize } = useSWRInfinite<PostsData>(getKey, {
    revalidateFirstPage: false,
    fallbackData: posts,
  });
  const flattenedData = data?.flat();

  const loadMorePosts = useCallback(() => {
    setSize(size + 1);
  }, [setSize, size]);

  const hasMore = !!data && data[data.length - 1].length === pageSize;

  useEffect(() => {
    window.addEventListener('online', loadMorePosts);

    return () => {
      window.removeEventListener('online', loadMorePosts);
    };
  }, [loadMorePosts, size]);

  return (
    <Fragment>
      <InfiniteScroll
        next={loadMorePosts}
        hasMore={hasMore}
        loader={size > 1 && <div className="spinner" />}
        dataLength={size}
      >
        <ul>
          {flattenedData?.map(({ slug, title, subtitle, date }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`} className="container">
                <h2 className="title">
                  {title}
                  <div className="subtitle">{subtitle}</div>
                </h2>
                <time className="time">{date}</time>
              </Link>
            </li>
          ))}
        </ul>
        {hasMore && (
          <button className="loading_ui" onClick={() => setSize(size + 1)}>
            Loading..
          </button>
        )}
      </InfiniteScroll>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default Infinite;
