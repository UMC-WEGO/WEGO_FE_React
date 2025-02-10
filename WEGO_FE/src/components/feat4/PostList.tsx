import PostItem from './PostItem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* 부모 요소의 색상 상속 */
`;

interface Post {
  post_id: number;
  category_name: string;
  title: string;
  content: string;
  created_at: string;
  location_name: string;
  total_comment: number;
  total_like: number;
  total_scrap: number;
}

interface PostListProps {
  posts: Post[];
  showRank?: boolean | undefined; // 순위 표시 여부 (인기 게시판)
}

const PostList: React.FC<PostListProps> = ({ posts, showRank = false }) => (
  <div>
    {posts.map((post, index) => {
      return (
        <StyledLink key={post.post_id} to={`/board/detail/${post.post_id}`}>
          <PostItem
            key={post.post_id} // 중복 key 제거
            rank={index + 1}
            category={post.category_name}
            title={post.title}
            content={post.content}
            time={post.created_at}
            location={post.location_name}
            showRank={showRank}
            total_comment={post.total_comment}
            total_like={post.total_like}
            total_scrap={post.total_scrap}
          />
        </StyledLink>
      );
    })}
  </div>
);

export default PostList;
