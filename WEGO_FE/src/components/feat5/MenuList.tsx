import * as S from '../../pages/feat_5/mypage/MyPage.style';
import List1 from '../../images/feat5/List1.svg';
import List2 from '../../images/feat5/List2.svg';
import List4 from '../../images/feat5/List4.svg';
import List5 from '../../images/feat5/List5.svg';
import List6 from '../../images/feat5/List6.svg';

interface MenuListProps {
  handleNavigate: (path: string) => void;
}

function MenuList({ handleNavigate }: MenuListProps) {
  return (
    <S.MenuList>
      <button onClick={() => handleNavigate('points')}>
        <img src={List1} alt="포인트 사용" />
        포인트 사용
      </button>
      <button onClick={() => handleNavigate('posts')}>
        <img src={List2} alt="내가 쓴 글" />
        내가 쓴 글
      </button>
      <button onClick={() => handleNavigate('question')}>
        <img src={List4} alt="자주 묻는 질문" />
        자주 묻는 질문
      </button>
      <button onClick={() => handleNavigate('terms')}>
        <img src={List5} alt="이용 약관" />
        이용 약관
      </button>
      <button onClick={() => handleNavigate('privacy')}>
        <img src={List6} alt="개인정보 처리방침" />
        개인정보 처리방침
      </button>
    </S.MenuList>
  );
}

export default MenuList;
