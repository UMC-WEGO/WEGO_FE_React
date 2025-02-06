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
              {timestamp}
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