import * as S from './BoardDetailPage.style';
import { TbArrowLeft, TbShare2, TbDotsVertical } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { allPosts } from '../../../mocks/board/postData';
import {
  PiChatTextBold,
  PiThumbsUpBold,
  PiBookmarkSimpleBold,
} from 'react-icons/pi';

function BoardDetailPage() {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>(); // URL에서 id를 가져와
  const post = allPosts.find(post => post.id === postId); // id로 게시글 찾아

  const [activeIcons, setActiveIcons] = useState<{
    like: boolean;
    comment: boolean;
    scrap: boolean;
  }>({
    like: false,
    comment: false,
    scrap: false,
  });

  const handleBack = () => {
    navigate(-1); // 이전 페이지
  };

  const handleClick = (icon: 'like' | 'comment' | 'scrap') => {
    setActiveIcons(prev => ({
      ...prev,
      [icon]: !prev[icon], // 클릭할 때마다 해당 아이콘의 상태를 토글
    }));
  };

  // 게시글 존재하는지 확인
  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.Header>
        <span onClick={handleBack}>
          <TbArrowLeft />
        </span>
        <div>
          <span>
            <TbShare2 />
          </span>
          <span>
            <TbDotsVertical />
          </span>
        </div>
      </S.Header>

      <S.Content>
        <p> # {post.category}</p>
        <S.Profile>
          <img src="https://buly.kr/CsipNnM" alt="Profile" />
          <div>
            <span>위고 닉네임</span>
            <p>{post.time}</p>
          </div>
        </S.Profile>
        <h1>{post.title}</h1>
        <img src="https://buly.kr/AaoydRw" alt="Post Image" />
        <h6>{post.content}</h6>
      </S.Content>

      <hr />
      <S.Response>
        <span onClick={() => handleClick('like')}>
          <PiThumbsUpBold
            className={`icon ${activeIcons.like ? 'active' : ''}`}
          />
          <p>공감 5</p>
        </span>
        <span onClick={() => handleClick('comment')}>
          <PiChatTextBold
            className={`icon ${activeIcons.comment ? 'active' : ''}`}
          />
          <p>댓글 3</p>
        </span>
        <span onClick={() => handleClick('scrap')}>
          <PiBookmarkSimpleBold
            className={`icon ${activeIcons.scrap ? 'active' : ''}`}
          />
          <p>스크랩 2</p>
        </span>
      </S.Response>
      <S.CommentHr />
    </S.Container>
  );
}

export default BoardDetailPage;
