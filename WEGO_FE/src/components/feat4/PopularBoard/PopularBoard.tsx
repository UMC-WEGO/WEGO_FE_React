import * as S from './PopularBoard.style';
import PostList from '../PostList';
import { getPopularPostsApi } from '../../../apis/feat4/postApi';
import { useState, useEffect } from 'react';

type Post = {
  post_id: number;
  picture_url: string | null;
  category_name: string;
  title: string;
  content: string;
  location_name: string;
  created_at: string;
  total_comment: number;
  total_like: number;
  total_scrap: number;
};

function PopularBoard() {
  const [posts, setPosts] = useState<Post[]>([]); // 인기 게시글 상태

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPopularPostsApi();
      console.log(data);
      if (data) {
        setPosts(data); // 받아온 게시글 저장
      }
    };

    fetchPosts();
  }, []);

  return (
    <S.Container>
      {/* 좋아요 순으로 정련된 게시물 목록 렌더링 */}
      <PostList posts={posts} showRank={true} />
    </S.Container>
  );
}

export default PopularBoard;
