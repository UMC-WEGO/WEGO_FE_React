import React from 'react';
import PostList from '../../feat4/PostList';
import { allPosts } from '/src/mocks/board/postData';
import * as S from './InstanceBoard.style';

const InstanceBoard = () => {
  //margin: 24px 20px;
  return (
    <S.Container>
      <S.TitleBoxWrap>
        <S.Title>즉흥 게시판</S.Title>
        <S.MoreInfor>
          더보기
          <img src="/src/images/feat3/RightArrow_gray.svg" alt="" />
        </S.MoreInfor>
      </S.TitleBoxWrap>
      {/* <PostList posts={allPosts} /> */}
    </S.Container>
  );
};

export default InstanceBoard;
