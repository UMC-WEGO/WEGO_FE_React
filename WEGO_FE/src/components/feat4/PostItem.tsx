import * as S from './PostItem.style';
import { LuDot } from 'react-icons/lu';
import { FaCrown } from 'react-icons/fa6';
import {
  PiChatTextBold,
  PiThumbsUpBold,
  PiBookmarkSimpleBold,
} from 'react-icons/pi';

// 상대 시간 변환 함수 (ex: "3시간 전", "1일 전")
const timeAgoFormat = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffDay > 0) return `${diffDay}일 전`;
  if (diffHour > 0) return `${diffHour}시간 전`;
  if (diffMin > 0) return `${diffMin}분 전`;
  return '방금 전';
};

interface PostItemProps {
  rank: number;
  category: string;
  title: string;
  content: string;
  time: string;
  location: string;
  total_like: number;
  total_comment: number;
  total_scrap: number;
  showRank?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({
  rank,
  category,
  title,
  content,
  time,
  location,
  total_like,
  total_comment,
  total_scrap,
  showRank,
}) => (
  <S.PostContainer>
    {showRank && (
      <S.Rank>
        {rank === 1 && <FaCrown />} {/* ✅ 1등일 때만 왕관 표시 */}
        {rank}
      </S.Rank>
    )}
    <div style={{ display: 'flex', gap: '10px' }}>
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
            {timeAgoFormat(time)}
          </h5>
          <h6>
            <div>
              <PiThumbsUpBold />
              {total_like}
            </div>
            <div>
              <PiChatTextBold />
              {total_comment}
            </div>
            <div>
              <PiBookmarkSimpleBold />
              {total_scrap}
            </div>
          </h6>
        </S.PostInfo>
      </S.Content>
    </div>
  </S.PostContainer>
);

export default PostItem;
