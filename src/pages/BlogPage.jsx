import React from 'react';
import styles from './BlogPage.module.scss';
import {posts} from '../dummy-data/dummy-post';
import PostCard from "../components/PostCard.jsx";

const BlogPage = () => {

  // useEffect(() => {
  //   throw new Error('알 수 없는 에러가 발생했습니다!');
  // }, []);

  return (
    <>
      <div className={styles.blog}>
        <div className={styles.grid}>
          {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </>
  );
};

export default BlogPage;