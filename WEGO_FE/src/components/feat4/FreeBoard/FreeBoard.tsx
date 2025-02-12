import * as S from './FreeBoard.style';
import { useState, useEffect } from 'react';
import PostList from '../PostList';
import { getAllPostsApi } from '../../../apis/feat4/postApi';

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

function FreeBoard() {
  const categories: string[] = [
    '전체',
    '즉흥 자랑',
    '미션 제안',
    '현지 정보',
    '일반',
  ];
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [posts, setPosts] = useState<Post[]>([]); // 전체 게시글 상태

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPostsApi(100); // 첫 페이지 100개 가져오기
      if (data) {
        setPosts(data); // 받아온 게시글 저장
      }
    };

    fetchPosts();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredPosts =
    selectedCategory === '전체'
      ? posts
      : posts.filter(post => post.category_name === selectedCategory);

  return (
    <S.Container>
      <div style={{ paddingLeft: '10px' }}>
        {categories.map(category => (
          <S.CategoryButton
            key={category}
            onClick={() => handleCategoryChange(category)}
            selected={selectedCategory === category}
          >
            {category}
          </S.CategoryButton>
        ))}
      </div>
      <S.PostListContainer>
        {/* <p>선택된 카테고리: {selectedCategory}</p> */}
        {/* 여기에 선택된 카테고리에 맞는 게시물 목록 렌더링 */}
        <PostList posts={filteredPosts} />
      </S.PostListContainer>
    </S.Container>
  );
}

export default FreeBoard;
