import PostCard from "./PostCard";
import { Link } from "react-router-dom";

interface PostForm {
  post_id: number;
  picture_url: string;
  category_name: string;
  title: string;
  content: string;
  location_name: string;
  created_at: string;

  total_comment: number;
  total_like: number;
  total_scrap: number;
  popularity_score: string;

//   category_name: "현지 정보"
//   content: "순천 안온해변에서 어쩌고"
//   created_at: "2025-02-17T04:23:20.000Z"
//   location_name: "군산"
//   picture_url: null
//   popularity_score:"19.5"
// - post_id: 93
//   title: "이런건 어떤가요"
// - total_comment: 5
// - total_like: 1
// - total_scrap: 1
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
        <Link key={postData.post_id} to={`/board/detail/${postData.post_id}`}>
          <PostCard
            img_url={postData.picture_url}
            tag={postData.category_name}
            title={postData.title}
            content={postData.content}
            location={postData.location_name}
            timestamp={postData.created_at}
            likes_num={postData.total_like}
            comments_num={postData.total_comment}
            scripts_num={postData.total_scrap}
          />
        </Link>
      ))}
    </div>
  )
}

export default PostList;