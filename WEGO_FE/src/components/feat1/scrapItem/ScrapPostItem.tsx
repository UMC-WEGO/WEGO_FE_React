import * as S from '../../feat4/PostItem.style';
import { LuDot } from 'react-icons/lu';
import {
  PiChatTextBold,
  PiThumbsUpBold,
  PiBookmarkSimpleBold,
} from 'react-icons/pi';
import styled from 'styled-components';
import bookmark from '../../../images/feat1/Bookmark.svg';

interface PostItemProps {
  rank: number;
  category: string;
  title: string;
  content: string;
  time: string;
  location: string;
  showRank?: boolean;
}

const PostContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
`;
const PostImgBox = styled.div`
  position: relative;
  width: 95px;
  height: 95px;
  margin-right: 13px;
`;
const PostImg = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 5px;
  object-fit: cover;
`;
const PostBookMark = styled.img`
  position: absolute;
  top: 5px;
  left: 5px;
`;

const ScrapPostItem: React.FC<PostItemProps> = ({
  rank,
  category,
  title,
  content,
  time,
  location,
  showRank,
}) => (
  <PostContainer>
    {showRank && <S.Rank>{rank}</S.Rank>}
    <PostImgBox>
      <PostImg src="https://buly.kr/9iFBNCv" alt="Post Image" />
      <PostBookMark src={bookmark}></PostBookMark>
    </PostImgBox>
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
  </PostContainer>
);

export default ScrapPostItem;
