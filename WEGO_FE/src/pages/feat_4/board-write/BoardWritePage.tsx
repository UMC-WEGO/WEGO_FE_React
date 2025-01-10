import * as S from './BoardWritePage.style';
import { LuDot, LuMapPin } from 'react-icons/lu';
import { FaCaretDown } from 'react-icons/fa';
import { useNavigate } from 'react-router';

function BoardWritePage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지
  };
  return (
    <S.Container>
      <S.Header>
        <button className="cancel" onClick={handleBack}>
          취소
        </button>
        <div>
          주제
          <LuDot />
          전체&nbsp;
          <FaCaretDown />
        </div>
        <button className="complete">완료</button>
      </S.Header>

      <S.Content>
        <input placeholder="제목" />
        <textarea placeholder="위고의 즉흥여행러들과 이야기를 나눠보세요!" />
      </S.Content>

      <S.Region>
        <p>지역 선택</p>
        <span>
          <LuMapPin />
        </span>
      </S.Region>

      <S.Photo>
        <h1>사진 업로드</h1>
        <p>
          위고에서 즉흥 미션을 해결하며 여행했던 사진을 업로드 해주세요.
          <br />
          여행지와 관련 없거나 부적절한 사진을 등록하시는 경우, 사전경고 없이
          포인트 회수와 함께 사진이 삭제될 수 있습니다.
        </p>
        <S.UploadBox>
          <input type="file" accept="image" />
          <span>+</span>
          <span>0/5</span>
        </S.UploadBox>
      </S.Photo>
    </S.Container>
  );
}

export default BoardWritePage;
