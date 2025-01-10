import * as S from './CommentList.style';
import { useEffect, useRef } from 'react';

interface Comment {
  username: string;
  text: string;
  time: string;
  profileImage: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const commentEndRef = useRef<HTMLDivElement | null>(null);

  // 댓글이 업데이트될 때마다 하단으로 스크롤
  useEffect(() => {
    if (commentEndRef.current) {
      commentEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [comments]); // comments가 변경될 때마다 호출

  return (
    <div>
      {comments.map((comment: Comment, index: number) => (
        <S.Container key={index}>
          <S.CommentBox>
            <img
              src={comment.profileImage}
              alt={`${comment.username} profile`}
            />
            <S.Comment>
              <div>
                <h5>{comment.username}</h5>
                <h6>{comment.time}</h6>
              </div>
              <p>{comment.text}</p>
            </S.Comment>
          </S.CommentBox>
        </S.Container>
      ))}
      <div ref={commentEndRef} />
    </div>
  );
};

export default CommentList;
