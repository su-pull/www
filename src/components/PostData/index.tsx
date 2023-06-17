import React from 'react';
import styles from './styles.module.scss';
import PostProps from 'types/PostProps';
import RouterBack from 'components/RouterBack';

const PostData = ({ post }: PostProps) => {
  return (
    <>
      <RouterBack />
      <h1 className={styles.color_h1}>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
};

export default PostData;
