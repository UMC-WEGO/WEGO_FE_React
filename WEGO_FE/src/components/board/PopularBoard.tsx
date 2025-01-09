import * as S from './PopularBoard.style';
import PostList from './PostList';
import { allPosts } from '../../mocks/board/postData';

function PopularBoard() {
  return (
    <S.Container>
      {/* 좋아요 순으로 정련된 게시물 목록 렌더링 */}
      <PostList posts={allPosts} />
    </S.Container>
  );
}

export default PopularBoard;
