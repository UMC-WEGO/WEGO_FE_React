import * as S from '../../feat4/PostItem.style';

import { PiChatTextBold, PiThumbsUpBold, PiBookmarkSimpleBold } from "react-icons/pi";
// 게시물 카드

interface PostDataForm {
  id: number;
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
  id,
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
        <img src={img_url}/>
        <S.Content>
          <span>
              <div>#{tag}</div>
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