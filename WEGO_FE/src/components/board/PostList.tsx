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
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div>
    {posts.map((post, index) => (
      <PostItem
        key={index}
        category={post.category}
        title={post.title}
        content={post.content}
        time={post.time}
        location={post.location}
      />
    ))}
  </div>
);

export default PostList;
