// src/components/feat4/PostItem.tsx 를 변형
import * as S from '../../feat4/PostItem.style';
import styled from 'styled-components';

import WEGO_Logo from '../../../images/feat2/WEGO_Logo.jpg';
import { PiChatTextBold, PiThumbsUpBold, PiBookmarkSimpleBold } from "react-icons/pi";
import { FaCrown } from 'react-icons/fa6';

const Mission_Img = styled.img`
  height: 95px;
  width: 95px;
  padding-right: 12px;
`

// 게시물 카드

interface PostDataForm {
  img_url: string;
  ranking?: number;
  showRanking?: boolean;  
  tag: string;
  title: string;
  content: string;
  timestamp: string;
  location: string;
  likes_num: number;
  comments_num: number;
  scripts_num: number;
}

const PostCard = ({
  ranking,
  showRanking,
  img_url,
  tag,
  title,
  content,
  timestamp,
  location,
  likes_num,
  comments_num,
  scripts_num
}: PostDataForm) => {
  const postedDate = new Date(timestamp);
  const nowDate = new Date();

  const timeDiff = nowDate.getTime() - postedDate.getTime();

  const secDiff = timeDiff / 1000;
  const minDiff = secDiff / 60;
  const hourDiff = minDiff / 60;
  const dayDiff = hourDiff / 24;
  const monDiff = dayDiff / 30;
  const yearDiff = monDiff / 12;

  const intSecDiff = Math.floor(secDiff);  // 또는 Math.round(), parseInt() 등 사용 가능
  const intMinDiff = Math.floor(minDiff);
  const intHourDiff = Math.floor(hourDiff);
  const intDayDiff = Math.floor(dayDiff);
  const intMonDiff = Math.floor(monDiff);
  const intYearDiff = Math.floor(yearDiff);

  return(
      <S.PostContainer>
        {/* 순위 표시 영역 */}
        {showRanking && (
          <S.Rank>
            {ranking === 1 && <FaCrown/>}{ranking}
          </S.Rank>
        )}

        {/* 이미지 영역 */}
        {/* <Mission_Img src={img_url}/> */}
        <S.ImageWrapper>
          <img 
            src={img_url} 
            style={{width: '95px', height: '95px', objectFit: 'contain'}}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = WEGO_Logo; // 로고 이미지를 src로 설정
          }}/>
          <S.BookmarkIcon>
            <PiBookmarkSimpleBold />
          </S.BookmarkIcon>
        </S.ImageWrapper>

        {/* 본문 영역 */}
        <S.Content>
          <span>#{tag}</span>
          <h3>{title}</h3>
          <h4>{content}</h4>

          {/* 하단 정보 영역 */}
          <S.PostInfo>
            <h5>
              {location}
              {
                yearDiff >= 1 ? ` ${intSecDiff}년전` : 
                monDiff >= 1 ? ` ${intMonDiff}달전` : 
                dayDiff >= 1 ? ` ${intDayDiff}일전` :
                hourDiff >= 1 ? ` ${intHourDiff}시간전` : 
                minDiff >= 1 ? ` ${intMinDiff}분전` :
                  `${" 방금 전"}`
              }
            </h5>
            <h6>
              <div>
                <PiThumbsUpBold />{likes_num}
              </div>
              <div>
                <PiChatTextBold />{comments_num}
              </div>
              <div>
                <PiBookmarkSimpleBold />{scripts_num}
              </div>
            </h6>
          </S.PostInfo>
        </S.Content>
      </S.PostContainer>
  )
}

export default PostCard;