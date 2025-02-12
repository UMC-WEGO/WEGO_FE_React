export interface PostInfo {
  category_name: string;
  post_author_profile: string;
  post_author_nickname: string;
  picture_urls: string[];
  created_at: string;
  title: string;
  content: string;
  total_comment: number;
  total_like: number;
  total_scrap: number;
  location_name: string;
}

export interface Comment {
  user_id: number;
  comment_author_name: string;
  comment_author_profile: string;
  comment_created_at: string;
  comment_content: string;
}

export interface PostDetailResponse {
  post_info: PostInfo;
  comments: Comment[];
}
