import * as S from './PostItem.style';
import { LuDot } from 'react-icons/lu';
import {
  PiChatTextBold,
  PiThumbsUpBold,
  PiBookmarkSimpleBold,
} from 'react-icons/pi';

interface PostItemProps {
  rank: number;
  category: string;
  title: string;
  content: string;
  time: string;
  location: string;
  showRank?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({
  rank,
  category,
  title,
  content,
  time,
  location,
  showRank,
}) => (
  <S.PostContainer>
    {showRank && <S.Rank>{rank}</S.Rank>}
    <img src="https://buly.kr/9iFBNCv" alt="Post Image" />
    <S.Content>
      <span># {category}</span>
      <h3>{title}</h3>
      <h4>{content}</h4>
      <S.PostInfo>
        <h5>
          {location}
          <LuDot />
          {time}
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
);

export default PostItem;
