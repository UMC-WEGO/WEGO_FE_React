import { useState } from 'react';
import * as S from './FilterStyle'

import Calendar from './Calendar';
import CrewSelector from './CrewSelector';
import SelectDeparture from './SelectDeparture';
import Dropdown from '../Dropdown';
import Bottomsheet from '../BottomSheet';
import { location, Item_time, Item_transport } from '../../../mocks/feat2/TestData_Filter';
import { FaRegCalendar, FaCar, FaPeopleGroup } from 'react-icons/fa6';
import { LuAlarmClock, LuMapPin } from 'react-icons/lu';

interface DestinationFilterProps {
  numAdult: number;
  numChild: number;
  transport: string;
  timeAway: string;
  departureLocation: string;

  setNumAdult: any;
  setNumChild: any;
  setTransport: any;
  setTimeAway: any;
  setDepartureLocation: any;

  departureDate: Date;
  arrivalDate: Date;
  setDepartureDate: any;
  setArrivalDate: any;
}

const DestinationFilter = ({
  // 인원수
  numAdult,
  numChild,
  setNumAdult,
  setNumChild,

  // 이동수단
  transport,
  setTransport,

  // 이동시간
  timeAway,
  setTimeAway,

  // 여행지역
  departureLocation,
  setDepartureLocation,

  // 여행날짜
  departureDate,
  setDepartureDate,
  arrivalDate,
  setArrivalDate,
}: DestinationFilterProps) => {
  // 바텀시트 활성화 상태 관리
  const [isDateBottomActive, setIsDateBottomActive] = useState(false);
  const [isPeopleBottomActive, setIsPeopleBottomActive] = useState(false);
  const [isDepartureBottomActive, setIsDepartureBottomActive] = useState(false);

  // 바텀시트 활성 상태 변경
  const toggleDateBottom = () => {
    setIsDateBottomActive(!isDateBottomActive);
  };
  const togglePeopleBottom = () => {
    setIsPeopleBottomActive(!isPeopleBottomActive);
  };
  const toggleDepartureBottom = () => {
    setIsDepartureBottomActive(!isDepartureBottomActive);
  };

  return (
    <>
      <S.FilterBox>
{/* --- --- --- 첫번째 열 : 날짜 & 인원수 --- --- --- */}
        <S.SelectorRow>
          {/* --- --- --- 날짜 --- --- --- */}
          <div>
            <S.Label>
              {/* 아이콘 영역 */}
              <S.IconImg>
                <FaRegCalendar />
              </S.IconImg>

              {/* 바텀시트 & 선택한 날짜 */}
              <div>
                <S.BottomSheetBtn onClick={toggleDateBottom}>
                  <S.DateStyle
                    sameYear={
                      departureDate.getFullYear() === arrivalDate.getFullYear()
                    }
                  >
                    {/* 선택한 여행 출발 날짜 출력력 */}
                    {departureDate.getFullYear()}.
                    {String(departureDate.getMonth() + 1).padStart(2, '0')}.
                    {String(departureDate.getDate()).padStart(2, '0')}
                    {' ~ '}
                    {/* 출발 도착 연도가 같으면 도착 연도 생략 */}
                    {departureDate.getFullYear() !==
                      arrivalDate.getFullYear() &&
                      `${arrivalDate.getFullYear()}.`}
                    {String(arrivalDate.getMonth() + 1).padStart(2, '0')}.
                    {String(arrivalDate.getDate()).padStart(2, '0')}
                  </S.DateStyle>
                </S.BottomSheetBtn>

                <Bottomsheet
                  isOpen={isDateBottomActive}
                  onClose={toggleDateBottom}
                  height="60vh"
                >
                  {/* 바텀시트에 달력 출력 */}
                  <Calendar
                    departureDate={departureDate}
                    arrivalDate={arrivalDate}
                    setDepartureDate={setDepartureDate}
                    setArrivalDate={setArrivalDate}
                  />
                </Bottomsheet>
              </div>
            </S.Label>
          </div>

          <div>
            {/* --- --- --- 인원수 --- --- --- */}
            <S.Label>
              {/* 아이콘 영역 */}
              <S.IconImg>
                <FaPeopleGroup />
              </S.IconImg>

              {/* 바텀시트 & 선택한 인원수 */}
              <div>
                <S.BottomSheetBtn onClick={togglePeopleBottom}>
                  {numAdult === 0 && numChild === 0
                    ? '인원수                  '
                    : `성인 ${numAdult}명 아동 ${numChild}명`}
                </S.BottomSheetBtn>
                
                <Bottomsheet
                  isOpen={isPeopleBottomActive}
                  onClose={togglePeopleBottom}
                  height="35vh"
                >
                  <CrewSelector
                    numAdult={numAdult}
                    setNumAdult={setNumAdult}
                    numChild={numChild}
                    setNumChild={setNumChild}
                  />
                </Bottomsheet>
              </div>
            </S.Label>
          </div>
        </S.SelectorRow>

{/* --- --- --- 두번째 열 : 교통수단 --- --- --- */}
        <S.SelectorRow>
          <S.Label>
            <S.IconImg>
              <FaCar />
            </S.IconImg>
            <Dropdown
              value={transport}
              setValue={setTransport}
              option={Item_transport}
            />
          </S.Label>
        </S.SelectorRow>

{/* --- --- --- 세번째 열 : 시간대 --- --- --- */}
        <S.SelectorRow>
          <S.IconImg>
            <LuAlarmClock />
          </S.IconImg>
          <S.Label>
            <Dropdown
              value={timeAway}
              setValue={setTimeAway}
              option={Item_time}
            />
          </S.Label>
        </S.SelectorRow>

{/* --- --- --- 네번째 열 : 출발지 --- --- --- */}
        <S.SelectorRow>
          <S.Label>
            <S.IconImg>
              <LuMapPin />
            </S.IconImg>
            <div>
              <S.BottomSheetBtn onClick={toggleDepartureBottom}>
                {departureLocation}
              </S.BottomSheetBtn>
              <Bottomsheet
                isOpen={isDepartureBottomActive}
                onClose={toggleDepartureBottom}
                height="100vh - 42px"
              >
                <SelectDeparture
                  departureLocation={departureLocation}
                  setDepartureLocation={setDepartureLocation}
                  location={location}
                />
              </Bottomsheet>
            </div>
          </S.Label>
        </S.SelectorRow>
      </S.FilterBox>
    </>
  );
};

export default DestinationFilter;
