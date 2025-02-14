export type UserPostsData = {
  posts: Post[];
};

export type Post = {
  postId: number;
  categoryId: number;
  userId: number;
  localId: number;
  title: string;
  content: string;
  pictureUrl: string; // 사진
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  scrapCount: number;
  commentCount: number;
};
