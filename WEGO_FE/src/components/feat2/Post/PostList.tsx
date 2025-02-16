import PostCard from "./PostCard";
import { Link } from "react-router-dom";

interface PostForm {
  id: number;
  picture_url: string;
  category_name: string;
  title: string;
  content: string;
  location_name: string;
  created_at: string;
  conmment_count: number;
  like_count: number;
  scrap_count: number;
  popularity_score: string;
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
      {displayPosts.slice(0,3).map((postData, index) => (
        <Link key={postData.id} to={`/board/detail/${postData.id}`}>
          <PostCard
            img_url={postData.picture_url}
            tag={postData.category_name}
            title={postData.title}
            content={postData.content}
            location={postData.location_name}
            timestamp={postData.created_at}
            likes_num={postData.like_count}
            comments_num={postData.conmment_count}
            scripts_num={postData.scrap_count}
          />
        </Link>
      ))}
    </div>
  )
}

export default PostList;