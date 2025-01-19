import PostItem from './PostItem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ScrapPostItem from '../scrapItem/ScrapPostItem';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* 부모 요소의 색상 상속 */
`;

interface Post {
  id: string;
  category: string;
  title: string;
  content: string;
  time: string;
  location: string;
}

interface PostListProps {
  posts: Post[];
  showRank?: boolean | undefined; // 순위 표시 여부 (인기 게시판)
}

const ScrapPostList: React.FC<PostListProps> = ({
  posts,
  showRank = false,
}) => (
  <div>
    {posts.map((post, index) => (
      <StyledLink key={post.id} to={`/board/detail/${post.id}`}>
        <ScrapPostItem
          key={index}
          rank={index + 1}
          category={post.category}
          title={post.title}
          content={post.content}
          time={post.time}
          location={post.location}
          showRank={showRank}
        />
      </StyledLink>
    ))}
  </div>
);

export default ScrapPostList;
