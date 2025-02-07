import * as S from './CommentList.style';
import { useState, useEffect, useRef } from 'react';
import { Comment } from '../../../types/postType';

interface CommentListProps {
  comments: Comment[];
}

// 상대 시간 변환 함수
const timeAgoFormat = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffDay > 0) return `${diffDay}일 전`;
  if (diffHour > 0) return `${diffHour}시간 전`;
  if (diffMin > 0) return `${diffMin}분 전`;
  return '방금 전';
};

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

  console.log(comments);

  return (
    <div>
      {comments.map((comment, index) => (
        <S.Container key={index}>
          <S.CommentBox>
            <img
              src={comment.comment_author_profile}
              alt={`${comment.comment_author_name} profile`}
            />
            <S.Comment>
              <div>
                <h5>{comment.comment_author_name}</h5>
                <h6>{timeAgoFormat(comment.comment_created_at)}</h6>
              </div>
              <p>{comment.comment_content}</p>
            </S.Comment>
          </S.CommentBox>
        </S.Container>
      ))}
      <div ref={commentEndRef} />
    </div>
  );
};

export default CommentList;
