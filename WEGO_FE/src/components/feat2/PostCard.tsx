import styled from "styled-components"
// 게시물 카드

const PostCardBox = styled.div`
  border-bottom: 1px solid gray;
  padding: 9px;
  display: flex;

  display: flex; 
`
const PopularPostColumn1 = styled.div`
  //순위
  margin-right: 14px;
`
const PopularPostColumn2 = styled.div`
 //이미지
  margin-right: 14px;

  height: 95px;
  width: 95px;

  border: 1px solid violet;
  width: 95px;
  height: 95px;
`
const PopularPostColumn3 = styled.div`
  //내용물
  margin-right: 14px;

  display: flex;
  flex-direction: column;
`
const PopularPostRow1 = styled.div`
  //태그
  color: #0059FF;
  font-size: 10px;
`
const PopularPostRow2 = styled.div`
  //제목
  margin-top: 9px;
  font-size: 16px;
  font-weight: 600;
`
const PopularPostRow3 = styled.div`
  //내용
  margin-top: 9px;

  color: rgba(105, 105, 105, 1);
  font-size: 12px;
  font-weight: 500;
`
const PopularPostRow4 = styled.div`
  //하단 요소
  margin-top: 14px;

  color: rgba(105, 105, 105, 1);
  font-size: 11px;
  font-weight: 500;

  display: flex;
  justify-content: space-between;
`

type PostCardType ={
  ranking?: number;     // 인기순위 (인기 게시물에서)
  img_src?: string;      // 이미지 경로
  tag: string[];        // 상단에 들어가는 여행 태그
  title: string;        // 글 제목
  content: string;      // 글 내용
  destination: string;  // 여행지
  timestamp: Date;      // 게시 시간
  like: number;         // 좋아요 수
  comments: number;     // 댓글 수
  script: number;       // 저장된 수
}

interface PostCardProps {
  props: PostCardType;
}

const TimestampFormat = (timestamp: Date) => {
  const now = new Date();    // 지금 시간
  const timeDiff_ms = now.getTime() - new Date(timestamp).getTime();   // 시간차
  const timeDiff_h = Math.floor(timeDiff_ms / (1000 * 60 * 60));       // 미리초 -> 시간

  return (
    `${timeDiff_h}시간 전`
  );
}

const PostCard = ({props}: PostCardProps) => {
    return(
        <>
            <PostCardBox>
                <PopularPostColumn1>{props.ranking}</PopularPostColumn1>
                <PopularPostColumn2>img</PopularPostColumn2>
                <PopularPostColumn3>
                  <PopularPostRow1>
                    {props.tag.map((tag, index) => (
                      <span key={index}>{tag} </span>
                    ))}
                  </PopularPostRow1>
                  <PopularPostRow2>{props.title}</PopularPostRow2>
                  <PopularPostRow3>{props.content}</PopularPostRow3>
                  <PopularPostRow4>
                    <span>{props.destination} • {TimestampFormat(props.timestamp)}</span>
                    <span>{props.like}, {props.comments}, {props.script}</span>
                  </PopularPostRow4>
                </PopularPostColumn3>
              </PostCardBox>
        </>
    )
}

export default PostCard;