import * as S from './RegionSelectPage.style';
import { TbArrowLeft, TbSearch } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { getRecentLocalApi } from '../../../apis/feat4/postApi';

// 서버 수정 후에 지역 수정해야함 !!
const regions = [
  {
    id: 1,
    name: '경기도',
    cities: [
      { id: 101, name: '서울 강남' },
      { id: 102, name: '서울 강북' },
      { id: 103, name: '고양' },
      { id: 9, name: '남양주' },
      { id: 7, name: '수원' },
      { id: 6, name: '용인' },
      { id: 107, name: '인천' },
      { id: 108, name: '의정부' },
      { id: 8, name: '하남' },
    ],
  },
  {
    id: 2,
    name: '강원도',
    cities: [
      { id: 10, name: '강릉' },
      { id: 11, name: '속초' },
      { id: 14, name: '양양' },
      { id: 13, name: '정선' },
      { id: 12, name: '춘천' },
    ],
  },
  {
    id: 3,
    name: '전라도',
    cities: [
      { id: 15, name: '광주' },
      { id: 18, name: '군산' },
      { id: 19, name: '남원' },
      { id: 23, name: '담양' },
      { id: 20, name: '목포' },
      { id: 17, name: '부안' },
      { id: 21, name: '순천' },
      { id: 22, name: '여수' },
      { id: 16, name: '전주' },
    ],
  },
  {
    id: 4,
    name: '경상도',
    cities: [
      { id: 33, name: '거제' },
      { id: 27, name: '경주' },
      { id: 34, name: '김해' },
      { id: 24, name: '대구' },
      { id: 30, name: '문경' },
      { id: 25, name: '부산' },
      { id: 29, name: '안동' },
      { id: 26, name: '울산' },
      { id: 31, name: '창원' },
      { id: 32, name: '통영' },
      { id: 28, name: '포항' },
    ],
  },
  {
    id: 5,
    name: '충청도',
    cities: [
      { id: 43, name: '공주' },
      { id: 37, name: '단양' },
      { id: 35, name: '대전' },
      { id: 42, name: '보령' },
      { id: 36, name: '세종' },
      { id: 44, name: '아산' },
      { id: 41, name: '천안' },
      { id: 38, name: '청주' },
      { id: 39, name: '충주' },
    ],
  },
];

const RegionSelectPage = () => {
  const navigate = useNavigate();
  const userId = 1; // 임시 사용자 아이디 값 !!
  const [recentLocations, setRecentLocations] = useState<
    { id: number; name: string }[]
  >([]);

  // 최근 출발 지역 불러오기
  useEffect(() => {
    const fetchRecentLocations = async () => {
      const data = await getRecentLocalApi(userId);
      if (data) {
        setRecentLocations(data);
        console.log(data);
      }
    };
    fetchRecentLocations();
  }, []);

  // 이전 페이지 이동
  const handleBack = () => {
    navigate(-1);
  };

  // 지역 선택
  const handleRegionSelect = (id: number, name: string) => {
    console.log('선택된 지역:', { id, name });
    navigate('/board/write', { state: { selectedRegion: { id, name } } });
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
          <div>
            <h3>최근 출발</h3>
            <div>
              {/* {recentLocations.length > 0 ? (
  recentLocations.map((loc, index) => (
    <button
      key={index} // 배열 순서(index)를 key로 사용
      onClick={() => handleRegionSelect(index, loc)} // id 대신 index 사용
    >
      {loc}
    </button>
  ))
) : (
  <p>최근 출발 지역이 없습니다.</p>
)} */}
            </div>
          </div>

          {regions.map(region => (
            <div key={region.id}>
              <h3>{region.name}</h3>
              <div>
                {region.cities.map(city => (
                  <button
                    key={city.id}
                    onClick={() => handleRegionSelect(city.id, city.name)}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </S.Select>
      </S.Content>
    </S.Container>
  );
};

export default RegionSelectPage;
