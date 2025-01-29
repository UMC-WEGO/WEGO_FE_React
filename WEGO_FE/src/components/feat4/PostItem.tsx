import * as S from './PostItem.style';
import { LuDot } from 'react-icons/lu';
import { FaCrown } from 'react-icons/fa6';
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
    {showRank && (
      <S.Rank>
        {rank === 1 && <FaCrown />} {/* ✅ 1등일 때만 왕관 표시 */}
        {rank}
      </S.Rank>
    )}
    <S.ImageWrapper>
      <img
        src="https://i.pinimg.com/474x/b2/d8/6a/b2d86a1904b96e80e950042df2cd2d6e.jpg"
        alt="Post Image"
      />
      <S.BookmarkIcon>
        <PiBookmarkSimpleBold />
      </S.BookmarkIcon>
    </S.ImageWrapper>
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
