import PostItem from './PostItem';

interface Post {
  category: string;
  title: string;
  content: string;
  time: string;
  location: string;
}

interface PostListProps {
  posts: Post[];
  showRank?: boolean; // 순위 표시 여부 (인기 게시판)
}

const PostList: React.FC<PostListProps> = ({ posts, showRank = false }) => (
  <div>
    {posts.map((post, index) => (
      <PostItem
        key={index}
        rank={index + 1}
        category={post.category}
        title={post.title}
        content={post.content}
        time={post.time}
        location={post.location}
        showRank={showRank}
      />
    ))}
  </div>
);

export default PostList;
