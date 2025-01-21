import React from 'react';

import * as S from './ScrapBoard.style';
import { useState } from 'react';
import PostList from '../../feat4/PostList';
import { allPosts } from '../../../mocks/board/postData';
import bookmark from '../../../images/feat1/Bookmark.svg';
import ScrapPostList from '../scrapPostList/ScrapPostList';

function ScrapBoard() {
  const scrapPosts = allPosts;
  const categories: string[] = [
    '추천',
    '즉흥 자랑',
    '미션 제안',
    '현지 정보',
    '여행 팁',
  ];
  const [selectedCategory, setSelectedCategory] = useState<string>('추천');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // 카테고리 별로 필터링
  const filteredPosts = scrapPosts.filter(
    post => post.category === selectedCategory,
  );

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
        {/* <PostList posts={filteredPosts} /> 혜윤이 버전*/}
        <ScrapPostList posts={filteredPosts} />
      </S.PostListContainer>
    </S.Container>
  );
}

export default ScrapBoard;
