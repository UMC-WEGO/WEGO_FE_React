import * as S from './BoardAuthorProfilePage.style';
import { TbArrowLeft } from 'react-icons/tb';
import { LuDot } from 'react-icons/lu';
import { useNavigate } from 'react-router';
import PostList from '../../../components/feat4/PostList';
import { allPosts } from '../../../mocks/board/postData';

function BoardAuthorProfilePage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지
  };

  return (
    <S.Container>
      <S.Header>
        <span onClick={handleBack}>
          <TbArrowLeft />
        </span>
      </S.Header>
      <S.Profile>
        <img src="https://buly.kr/CsipNnM" alt="Profile" />
        <div>
          <h3>위고 닉네임</h3>
          <p>
            즉흥여행 3회
            <LuDot />
            즉흥온도 30°C
          </p>
        </div>
      </S.Profile>
      <S.Info>
        <div>
          <p>작성글</p>
          <span>3</span>
        </div>
        <div>
          <p>받은 공감</p>
          <span>15</span>
        </div>
        <div>
          <p>미션 수행</p>
          <span>8</span>
        </div>
      </S.Info>
      <hr />
      <S.Post>
        <p>작성글</p>
        <div>
          <PostList posts={allPosts} />
        </div>
      </S.Post>
    </S.Container>
  );
}

export default BoardAuthorProfilePage;
