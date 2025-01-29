import PostCard from "./PostCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface PostForm {
  id: string;
  ranking?: number;
  img_src: string;
  tag: string[];
  title: string;
  content: string;
  location: string;
  timestamp: string;
  likes: number;
  comments: number;
  scripts: number;
}

interface PostListForm {
  posts: PostForm[];
  limit?: number | undefined;
  showRanking?: boolean | undefined;     // 순위 출력 여부
}

const PostList = ({posts, limit, showRanking = false}: PostListForm) => {
  const displayPosts = limit ? posts.slice(0, limit): posts;

  return(
    <div>
      {displayPosts.map((postData, index) => (
        <Link key={postData.id} to={`/board/detail/${postData.id}`}>
          <PostCard
            ranking={postData.ranking}
            showRanking={showRanking}
            tag={postData.tag}
            title={postData.title}
            content={postData.content}
            timestamp={postData.timestamp}
            location={postData.location}
          />
        </Link>
      ))}
    </div>
  )
}

export default PostList;