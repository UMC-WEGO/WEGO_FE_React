import * as S from './RegionSelectPage.style';
import { TbArrowLeft, TbSearch } from 'react-icons/tb';
import { useNavigate } from 'react-router';

const RegionSelectPage = () => {
  const navigate = useNavigate();

  // 이전 페이지 이동
  const handleBack = () => {
    navigate(-1);
  };

  // 지역 선택
  const handleRegionSelect = (region: string) => {
    console.log('선택된 지역:', region);
    navigate('/board/write', { state: { selectedRegion: region } });
  };

  return (
    <S.Container>
      <S.Header>
        <span onClick={handleBack}>
          <TbArrowLeft />
        </span>
        <input placeholder="출발지를 선택하세요" />
        <span>
          <TbSearch />
        </span>
      </S.Header>
      <S.Content>
        <p>현재 위치가 아닌, 도시의 중심부를 기준으로 잡아요.</p>
        <S.Select>
          <h3>최근 출발</h3>
          <div>
            <button onClick={() => handleRegionSelect('부산')}>부산</button>
            <button onClick={() => handleRegionSelect('서울 강북')}>
              서울 강북
            </button>
          </div>

          <h3>경기도</h3>
          <div>
            <button onClick={() => handleRegionSelect('서울 강북')}>
              서울 강북
            </button>
            <button onClick={() => handleRegionSelect('서울 강남')}>
              서울 강남
            </button>
            <button onClick={() => handleRegionSelect('인천')}>인천</button>
            <button onClick={() => handleRegionSelect('의정부')}>의정부</button>
            <button onClick={() => handleRegionSelect('고양')}>고양</button>
          </div>

          <h3>강원도</h3>
          <div>
            <button onClick={() => handleRegionSelect('강릉')}>강릉</button>
            <button onClick={() => handleRegionSelect('속초')}>속초</button>
            <button onClick={() => handleRegionSelect('춘천')}>춘천</button>
            <button onClick={() => handleRegionSelect('정선')}>정선</button>
            <button onClick={() => handleRegionSelect('양양')}>양양</button>
          </div>

          <h3>전라도</h3>
          <div>
            <button onClick={() => handleRegionSelect('목포')}>목포</button>
            <button onClick={() => handleRegionSelect('전주')}>전주</button>
            <button onClick={() => handleRegionSelect('광주')}>광주</button>
            <button onClick={() => handleRegionSelect('여수')}>여수</button>
            <button onClick={() => handleRegionSelect('남원')}>남원</button>
          </div>

          <h3>경상도</h3>
          <div>
            <button onClick={() => handleRegionSelect('대구')}>대구</button>
            <button onClick={() => handleRegionSelect('부산')}>부산</button>
            <button onClick={() => handleRegionSelect('경주')}>경주</button>
            <button onClick={() => handleRegionSelect('울산')}>울산</button>
            <button onClick={() => handleRegionSelect('창원')}>창원</button>
          </div>

          <h3>충청도</h3>
          <div>
            <button onClick={() => handleRegionSelect('서산')}>서산</button>
            <button onClick={() => handleRegionSelect('대전')}>대전</button>
            <button onClick={() => handleRegionSelect('세종')}>세종</button>
            <button onClick={() => handleRegionSelect('청주')}>청주</button>
            <button onClick={() => handleRegionSelect('충주')}>충주</button>
          </div>

          <h3>제주도</h3>
          <div>
            <button onClick={() => handleRegionSelect('제주도')}>제주도</button>
          </div>
        </S.Select>
      </S.Content>
    </S.Container>
  );
};

export default RegionSelectPage;
