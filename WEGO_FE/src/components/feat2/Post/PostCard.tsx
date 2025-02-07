import * as S from '../../feat4/PostItem.style';
import styled from 'styled-components';

import { PiChatTextBold, PiThumbsUpBold, PiBookmarkSimpleBold } from "react-icons/pi";

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

  // ranking,
  // showRanking,
  // tag,
  // title,
  // content,
  // timestamp,
  // location
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

  return(
      <S.PostContainer>
        {showRanking && <S.Rank>{ranking}</S.Rank>}
        <Mission_Img src={img_url}/>
        <S.Content>
          <span>
              <div>{tag}</div>
          </span>
          <h3>{title}</h3>
          <h4>{content}</h4>
          <S.PostInfo>
            <h5>
              {location}
              {
                yearDiff < 0 ? ` ${yearDiff}년전` : 
                monDiff < 0 ? ` ${monDiff}달전` : 
                dayDiff < 0 ? ` ${dayDiff}일전` :
                hourDiff < 0 ? ` ${hourDiff}시간전` : 
                minDiff < 0 ? ` ${minDiff}분전` :
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