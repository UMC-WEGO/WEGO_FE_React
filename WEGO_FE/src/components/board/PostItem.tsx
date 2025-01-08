import * as S from './PostItem.style';
import { LuDot } from 'react-icons/lu';

interface PostItemProps {
  category: string;
  title: string;
  content: string;
  time: string;
  location: string;
}

const PostItem: React.FC<PostItemProps> = ({
  category,
  title,
  content,
  time,
  location,
}) => (
  <S.PostContainer>
    <img src="https://buly.kr/9iFBNCv" alt="Post Image" />
    <S.Content>
      <span># {category}</span>
      <h3>{title}</h3>
      <h5>{content}</h5>
      <h6>
        {location}
        <LuDot />
        {time}
      </h6>
    </S.Content>
  </S.PostContainer>
);

export default PostItem;
