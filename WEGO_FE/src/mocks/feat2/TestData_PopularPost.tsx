    // 테스트용 임시 인기 개시물 데이터
  
  type PostCardType ={
    id: string;
    ranking?: number;
    img_src: string;
    tag: string[];
    title: string;
    content: string;
    location: string;
    timestamp: string;
    likes: number;       // 좋아요 수
    comments: number;    // 댓글 수
    scripts: number;     // 인용 수
  }
  

  export const PopularPostData: PostCardType[] = [
    {
      id: '1',
      ranking: 1,
      img_src: " ",
      tag: ["#미션제안"],
      title: "제목",
      content: "내용",
      location: "여행지",
      timestamp: "2024.01.01",
      likes: 0,
      comments: 0,
      scripts: 0
    },
    {
      id: '2',
      ranking: 2,
      img_src: " ",
      tag: ["#즉흥자랑"],
      title: "이런 건 어떤가요 ㅋㅋ",
      content: "순천 안온해변에서 갑자기......",
      location: "순천시",
      timestamp: "2024.01.01",
      likes: 60,
      comments: 23,
      scripts: 43
    },
    {
      id: '3',
      ranking: 3,
      img_src: " ",
      tag: ["#암튼게시물물"],
      title: "제목____________",
      content: "내용________________________________",
      location: "어디어디",
      timestamp: "2024.01.01",
      likes: 1,
      comments: 1,
      scripts: 1
    },
  ]