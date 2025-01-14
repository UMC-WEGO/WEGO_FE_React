import * as S from './CommentList.style';
import { useState, useEffect, useRef } from 'react';

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
  const [prevCommentsLength, setPrevCommentsLength] = useState(comments.length);

  // 댓글이 추가될 때만 하단 스크롤(첫 렌더링 제외)
  useEffect(() => {
    if (comments.length > prevCommentsLength) {
      commentEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setPrevCommentsLength(comments.length);
  }, [comments, prevCommentsLength]);

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
