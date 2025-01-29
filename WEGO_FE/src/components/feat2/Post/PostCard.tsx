import * as S from '../../feat4/PostItem.style';

import { PiChatTextBold, PiThumbsUpBold, PiBookmarkSimpleBold } from "react-icons/pi";
// 게시물 카드

interface PostDataForm {
  ranking?: number;
  showRanking?: boolean;  
  tag: string[];
  title: string;
  content: string;
  timestamp: string;
  location: string;
}

const PostCard = ({
  ranking,
  showRanking,
  tag,
  title,
  content,
  timestamp,
  location
}: PostDataForm) => {
  return(
      <S.PostContainer>
        {showRanking && <S.Rank>{ranking}</S.Rank>}
        <img/>
        <S.Content>
          <span>
            {tag.map((tagcontent, index) => (
              <div key={index}>#{tagcontent}</div>
            ))}
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
                <PiThumbsUpBold />0
              </div>
              <div>
                <PiChatTextBold />0
              </div>
              <div>
                <PiBookmarkSimpleBold />0
              </div>
            </h6>
          </S.PostInfo>
        </S.Content>
      </S.PostContainer>
  )
}

export default PostCard;